# ============================================================
# STAGE 1 — Build
# dhi.io/node:22-dev : image hardened avec outils de build
# ============================================================
FROM dhi.io/node:22-dev AS builder

# L'image tourne en non-root ; on passe root pour les installations
USER root

WORKDIR /build

# corepack lit packageManager=pnpm@11.5.2 dans package.json
# et active le bon binaire sans appel réseau supplémentaire
RUN corepack enable

# Dépendances d'abord (couche cacheée tant que lock/npmrc ne changent pas)
COPY package.json pnpm-lock.yaml .npmrc ./

# onlyBuiltDependencies autorise les postinstall de prisma/esbuild
# sans flag CLI (compatible toutes versions pnpm)
RUN echo 'onlyBuiltDependencies[]=@prisma/engines' >> .npmrc \
 && echo 'onlyBuiltDependencies[]=esbuild'          >> .npmrc \
 && echo 'onlyBuiltDependencies[]=prisma'            >> .npmrc \
 && pnpm install --frozen-lockfile

# Génération du client Prisma (binaires présents après install)
COPY prisma/ ./prisma/
RUN DATABASE_URL="mysql://localhost:3306/db" pnpm exec prisma generate

# Copie des sources et compilation TypeScript
COPY tsconfig.json prisma.config.ts ./
COPY src/ ./src/
RUN pnpm build

# node_modules de production uniquement (sans devDependencies)
RUN mkdir /prod_modules \
 && cp package.json pnpm-lock.yaml .npmrc /prod_modules/ \
 && cd /prod_modules \
 && pnpm install --frozen-lockfile --prod


# ============================================================
# STAGE 2 — Runtime
# dhi.io/node:22 : image hardened minimale, sans outils de build
# ============================================================
FROM dhi.io/node:22 AS runner

# L'image hardened runtime tourne déjà en non-root (user node)
USER node
WORKDIR /srv

ENV NODE_ENV=production

# On copie uniquement ce qui est nécessaire à l'exécution
COPY --from=builder --chown=node:node /build/dist/                ./dist/
COPY --from=builder --chown=node:node /prod_modules/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /build/package.json         ./package.json

LABEL org.opencontainers.image.title="Tsuyomi Discord Bot" \
      org.opencontainers.image.description="Bot Discord TypeScript — AniList / MAL / MangaCollec" \
      org.opencontainers.image.source="https://github.com/Yatsuuw/Tsuyomi" \
      org.opencontainers.image.licenses="GPL-3.0-only"

CMD ["node", "dist/index.js"]

# ============================================================
# STAGE 1 - Build
# dhi.io/node:22-dev : image hardened avec outils de build
# ============================================================
FROM dhi.io/node:22-dev AS builder

USER root
WORKDIR /build

# npm est toujours present dans les images Node
# On installe pnpm globalement via npm, version fixee (packageManager du projet)
RUN npm install -g pnpm@11.5.2

# Dependances (couche cachee tant que lock/npmrc ne changent pas)
COPY .npmrc package.json pnpm-lock.yaml ./

# onlyBuiltDependencies autorise les postinstall prisma/esbuild
RUN echo 'onlyBuiltDependencies[]=@prisma/engines' >> .npmrc \
 && echo 'onlyBuiltDependencies[]=esbuild'         >> .npmrc \
 && echo 'onlyBuiltDependencies[]=prisma'           >> .npmrc \
 && pnpm install --frozen-lockfile

# Generation du client Prisma
COPY prisma/ ./prisma/
RUN DATABASE_URL="mysql://localhost:3306/db" pnpm exec prisma generate

# Compilation TypeScript
COPY tsconfig.json prisma.config.ts ./
COPY src/ ./src/
RUN pnpm build

# node_modules de production uniquement
RUN mkdir /prod_modules \
 && cp package.json pnpm-lock.yaml .npmrc /prod_modules/ \
 && cd /prod_modules \
 && pnpm install --frozen-lockfile --prod


# ============================================================
# STAGE 2 - Runtime
# dhi.io/node:22 : image hardened minimale
# ============================================================
FROM dhi.io/node:22 AS runner

USER node
WORKDIR /srv

ENV NODE_ENV=production

COPY --from=builder --chown=node:node /build/dist/                ./dist/
COPY --from=builder --chown=node:node /prod_modules/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /build/package.json         ./package.json

LABEL org.opencontainers.image.title="Tsuyomi Discord Bot" \
      org.opencontainers.image.description="Bot Discord TypeScript - AniList / MAL / MangaCollec" \
      org.opencontainers.image.source="https://github.com/Yatsuuw/Tsuyomi" \
      org.opencontainers.image.licenses="GPL-3.0-only"

CMD ["node", "dist/index.js"]

# ============================================================
# STAGE 1 - Build
# ============================================================
FROM dhi.io/node:22-dev AS builder

USER root
WORKDIR /build

RUN npm install -g pnpm@11.5.2

COPY .npmrc package.json pnpm-lock.yaml ./

# pnpm 11 requiert que onlyBuiltDependencies soit dans le lock file.
# On passe la liste en CLI pour contourner le freeze sans modifier le lock.
RUN pnpm install --frozen-lockfile \
    --config.onlyBuiltDependencies=@prisma/engines,esbuild,prisma

COPY prisma/ ./prisma/
RUN DATABASE_URL="mysql://localhost:3306/db" pnpm exec prisma generate

COPY tsconfig.json prisma.config.ts ./
COPY src/ ./src/
RUN pnpm build

RUN mkdir /prod_modules \
 && cp package.json pnpm-lock.yaml .npmrc /prod_modules/ \
 && cd /prod_modules \
 && pnpm install --frozen-lockfile --prod \
    --config.onlyBuiltDependencies=@prisma/engines,esbuild,prisma


# ============================================================
# STAGE 2 - Runtime
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

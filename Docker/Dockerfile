# ============================================================
# STAGE 1 - Build
# ============================================================
FROM dhi.io/node:22-dev AS builder

WORKDIR /build

# Installation de pnpm via corepack (inclus dans node:22)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@11.5.2 --activate

COPY package.json pnpm-lock.yaml .npmrc ./

# --ignore-scripts=false pour autoriser les build scripts (prisma, esbuild)
# sans passer par la politique onlyBuiltDependencies du lock file
RUN pnpm install --frozen-lockfile --ignore-scripts=false

COPY prisma/ ./prisma/
RUN DATABASE_URL="mysql://localhost:3306/db" pnpm exec prisma generate

COPY tsconfig.json prisma.config.ts ./
COPY src/ ./src/
RUN pnpm build

RUN mkdir /prod_modules && \
    cp package.json pnpm-lock.yaml .npmrc /prod_modules/ && \
    cd /prod_modules && \
    pnpm install --frozen-lockfile --prod --ignore-scripts


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
      org.opencontainers.image.description="Bot Discord TypeScript — AniList / MAL / MangaCollec" \
      org.opencontainers.image.source="https://github.com/Yatsuuw/Tsuyomi" \
      org.opencontainers.image.licenses="GPL-3.0-only"

CMD ["node", "dist/index.js"]

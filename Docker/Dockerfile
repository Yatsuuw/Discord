# ============================================================
# STAGE 1 — Builder
# ============================================================
FROM node:22-alpine3.23 AS builder

RUN apk add --no-cache libc6-compat python3 make g++

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@11.5.2 --activate

WORKDIR /build

COPY package.json pnpm-lock.yaml .npmrc pnpm.json ./

RUN pnpm install --frozen-lockfile

COPY prisma/ ./prisma/
RUN DATABASE_URL="mysql://localhost:3306/db" pnpm exec prisma generate

COPY tsconfig.json prisma.config.ts ./
COPY src/ ./src/
RUN pnpm build

# Dépendances de production uniquement
RUN pnpm install --frozen-lockfile --prod --ignore-scripts


# ============================================================
# STAGE 2 — Runner
# ============================================================
FROM node:22-alpine3.23 AS runner

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production

RUN addgroup -S tsuyomi && adduser -S tsuyomi -G tsuyomi
USER tsuyomi

WORKDIR /srv

COPY --from=builder --chown=tsuyomi:tsuyomi /build/dist/           ./dist/
COPY --from=builder --chown=tsuyomi:tsuyomi /build/node_modules/   ./node_modules/
COPY --from=builder --chown=tsuyomi:tsuyomi /build/package.json    ./package.json

LABEL org.opencontainers.image.title="Tsuyomi Discord Bot" \
      org.opencontainers.image.description="Bot Discord TypeScript — AniList / MAL / MangaCollec" \
      org.opencontainers.image.source="https://github.com/Yatsuuw/Tsuyomi" \
      org.opencontainers.image.licenses="GPL-3.0-only"

CMD ["node", "dist/index.js"]

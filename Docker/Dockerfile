FROM dhi.io/node:22-dev AS builder

WORKDIR /build

COPY package.json pnpm-lock.yaml .npmrc ./

RUN corepack enable && corepack prepare --activate

RUN pnpm install --frozen-lockfile

COPY tsconfig.json prisma.config.ts ./
COPY prisma/ ./prisma/
COPY src/ ./src/

ARG DATABASE_URL=mysql://build:build@localhost:3306/build
ENV DATABASE_URL=${DATABASE_URL}

RUN node ./node_modules/prisma/build/index.js generate

ENV DATABASE_URL=""

RUN pnpm build

RUN pnpm install --frozen-lockfile --prod --node-linker=hoisted --ignore-scripts \
  && pnpm store prune

FROM dhi.io/node:22 AS runner

WORKDIR /app

COPY --from=builder /build/dist/         ./dist/
COPY --from=builder /build/node_modules/ ./node_modules/
COPY --from=builder /build/package.json  ./package.json

LABEL org.opencontainers.image.title="Tsuyomi Discord Bot" \
  org.opencontainers.image.description="Bot Discord TypeScript — AniList / MAL / MangaCollec" \
  org.opencontainers.image.source="https://github.com/Yatsuuw/Discord" \
  org.opencontainers.image.licenses="GPL-3.0-only"

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
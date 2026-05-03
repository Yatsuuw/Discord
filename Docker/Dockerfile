FROM dhi.io/node:22-dev AS builder

RUN corepack enable && corepack prepare --activate

WORKDIR /build

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

COPY tsconfig.json prisma.config.ts ./
COPY prisma/ ./prisma/
COPY src ./src/

RUN pnpm db:gen

RUN pnpm build

FROM dhi.io/node:22 AS runner

RUN corepack enable && corepack prepare --activate

RUN groupadd --system --gid 1001 tsuyomi \
  && useradd --system --uid 1001 --gid tsuyomi --no-create-home tsuyomi

WORKDIR /app

COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /build/.npmrc ./npmrc

COPY --from=builder /build/dist/ ./dist/

RUN mkdir -p /app/logs && chown -R tsuyomi:tsuyomi /app

USER tsuyomi

LABEL org.opencontainers.image.title="Tsuyomi Discord Bot" \
  org.opencontainers.image.description="Bot Discord TypeScript - AniList / MAL / MangaCollec" \
  org.opencontainers.image.source="https://github.com/Yatsuuw/Discord" \
  org.opencontainers.image.licenses="GPL-3.0-only"

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]

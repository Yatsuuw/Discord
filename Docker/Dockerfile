# ============================================================
# STAGE 1 - Build
# ============================================================
FROM dhi.io/node:22-dev AS builder

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci

COPY prisma/ ./prisma/
RUN DATABASE_URL="mysql://localhost:3306/db" npx prisma generate

COPY tsconfig.json prisma.config.ts ./
COPY src/ ./src/
RUN npm run build

RUN mkdir /prod_modules && \
    cp package.json package-lock.json /prod_modules/ && \
    cd /prod_modules && \
    npm ci --omit=dev


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

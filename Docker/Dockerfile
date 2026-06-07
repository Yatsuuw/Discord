FROM dhi.io/node:26-alpine-sfw-ent-dev AS builder

USER root
WORKDIR /build

RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml .npmrc ./

# --ignore-scripts contourne ERR_PNPM_IGNORED_BUILDS
# Les scripts Prisma et esbuild sont déclenchés manuellement juste après
RUN pnpm install --frozen-lockfile --ignore-scripts \
 && node node_modules/esbuild/install.js 2>/dev/null || true \
 && node node_modules/@prisma/engines/scripts/postinstall.js 2>/dev/null || true \
 && node node_modules/prisma/scripts/postinstall.js 2>/dev/null || true

COPY prisma/ ./prisma/
RUN DATABASE_URL="mysql://localhost:3306/db" pnpm exec prisma generate

COPY tsconfig.json prisma.config.ts ./
COPY src/ ./src/
RUN pnpm build

RUN mkdir /prod_modules \
 && cp package.json pnpm-lock.yaml .npmrc /prod_modules/ \
 && cd /prod_modules \
 && pnpm install --frozen-lockfile --prod --ignore-scripts \
 && node node_modules/@prisma/engines/scripts/postinstall.js 2>/dev/null || true


FROM dhi.io/node:26-alpine AS runner

USER node
WORKDIR /srv

ENV NODE_ENV=production

COPY --from=builder --chown=node:node /build/dist/                ./dist/
COPY --from=builder --chown=node:node /prod_modules/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /build/package.json         ./package.json

LABEL org.opencontainers.image.title="Tsuyomi Discord Bot" \
      org.opencontainers.image.description="Bot Discord TypeScript — AniList / MAL / MangaCollec" \
      org.opencontainers.image.source="https://github.com/Yatsuuw/Discord" \
      org.opencontainers.image.licenses="GPL-3.0-only"

CMD ["node", "dist/index.js"]

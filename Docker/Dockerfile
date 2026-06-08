FROM node:22-alpine3.23

WORKDIR /app

COPY . .

RUN npm install -g pnpm && \
  pnpm install --ignore-scripts && \
  DATABASE_URL="mysql://localhost:3306/discord" pnpm exec prisma generate \
  pnpm build

CMD ["node", "dist/index.js"]

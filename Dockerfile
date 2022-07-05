FROM node:16 as builder

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . .


FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app /app

# Execute moleculer-runner
CMD ["node", "./bin/www"]

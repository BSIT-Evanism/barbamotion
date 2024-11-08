FROM node:lts AS runtime
WORKDIR /app

RUN npm install
COPY . .

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
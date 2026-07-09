FROM node:lts AS runtime
WORKDIR /app

COPY . .
RUN npm install -g pnpm && pnpm install --frozen-lockfile && SKIP_KEYSTATIC=true pnpm build

FROM nginx:alpine
COPY --from=runtime /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:22.22.3-slim AS build

WORKDIR /app

COPY package*.json ./
# The copied stage don't have .npmrc?
RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:1.27.4-alpine-slim
COPY --from=build /app/dist/ng-hackernews/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


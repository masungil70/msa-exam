# 빌드 단계
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# nginx 서빙 단계
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

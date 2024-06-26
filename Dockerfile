# STEP:1 - Instalacion de Dependencias
FROM node:18-alpine AS dev-deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# STEP:2 - Angular en produccion
FROM node:18-alpine AS build
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# STEP:3 - Servidor de Nginx
FROM nginx:1.23.1-alpine AS production
ENV NODE_ENV production
COPY --from=build /app/dist/managment-escihu-virtual-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 9191
CMD ["nginx", "-g", "daemon off;"]

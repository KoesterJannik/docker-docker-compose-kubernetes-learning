# ---- Base Node ----
FROM node:18 AS base
WORKDIR /usr/src/app
ARG VITE_PUBLIC_BACKEND_URL
ENV VITE_PUBLIC_BACKEND_URL=$VITE_PUBLIC_BACKEND_URL

COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install

# ---- Copy Files/Build ----
FROM dependencies AS build
COPY . .
RUN npm run build

# ---- Release ----
FROM nginx:1.17.1-alpine AS release
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
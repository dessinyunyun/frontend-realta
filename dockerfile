FROM node:16.20.2-alpine as builder
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY --chown=app:node package*.json ./
# COPY npm*.lock .
RUN npm install --legacy-peer-deps
COPY --chown=app:node . .
# COPY . .

ARG BACKEND_URL
ENV BACKEND_URL=http://localhost:8000

EXPOSE 3000

# Copy .env file and shell script to container
# WORKDIR /usr/share/nginx/html
# COPY ./env.sh .
# COPY .env .

# Make our shell script executable
# RUN chmod +x env.sh

CMD [ "npm","run","dev" ]
# RUN npm build

#Stage 2
# FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
FROM mongo:latest
ADD database.js /docker-entrypoint-initdb.d/*.js
EXPOSE 27017

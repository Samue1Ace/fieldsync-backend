#newest-ish version of node
FROM node:21

#sets working directory
WORKDIR /app

#coopies the package json so we can install later
COPY ./package.json .

#clear the cache cuz you never know
RUN npm cache clean --force

#install
RUN npm install

#copy build
COPY . .

#expose our API to port 8080
EXPOSE 8080

#starts the express server
CMD [ "node", "backend/server/server.tsx" ]
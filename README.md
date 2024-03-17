
# fieldsync-backend

This repository contains a node.js backend for an API, that will communicate with a postgres database. This repo allows you to containerize both the API, aswell as the postgres db to ensure it works on every machine.

# Steps 
 1. Ensure that you have docker up running on your machine, the easiest way to to install the docker desktop app, also ensure you have npm/yarn installed and node.js

 2. Clone this repository

 3. Run the following ``` docker build -t node-express . ``` 

 4. Run ``` docker compose up   ``` 

 5. The backend should now be up and running, and the postgres instance should auto create the table

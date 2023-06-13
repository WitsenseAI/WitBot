# WitBot 
WitBot is a vanilla chatbot  application that can be connected to any LLM API endpoint. Currently it supports OpenAI API endpoints, specifically the *completions endpoint which is the core of OpenAI API .

## Development version
Following steps are needed to install client and server components for WitBot which intends to be a generic chat app.

1. Check node version and update if required.

2. The client is created with a vanilla js project template for the client-part of the app, with following command-
```
npm create vite@latest client --template vanilla
```
If you cloned the repo, you should skip the above step.

3. The client component implements the basic chat interactions between human-user and AI bot. The code is in  `client/main.js`

To start and test the client, use following -
```
cd client
npm install
npm run dev
```
4.  You can create server component from scratch as follows.
```
cd server
npm init -y
npm install cors dotenv express nodemon openai
```
The server component implements configuration settings to authenticate and call to endpoint API, in a script `server/server.js`.  Alternatively the script can configure server to return fixed response "Your message is received successfully". This is useful while testing the client as it does not cost the endpoint API usage. 

To start and test the server with API endpoints , create a `.env` file in `server` folder and specify the API key, e.g. for openAI models specify `OPENAI_API_KEY` as
```
OPENAI_API_KEY="sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
``` 
Use following command to test the server
```
cd server
npm run server
```
The server will be running at http:/localhost:5000 


## Dockerized version
If you do not wish to separately start the client and the server, use docker compose to use the dockerized version that starts both client and server on localhost. 

```
cd WitBot
docker compose up
```
You can open the app at http://localhost:5173/

If you wish to deploy this app in production, you may need to specify the hostname in docker-compose.yaml.

## code can be made to work with following LLMs

OpenAI text-davinci-003
OpenAI gpt-3.5-turbo

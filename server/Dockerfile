FROM node:19-alpine
WORKDIR /workspace

#Copy package.json file in the node folder inside container
COPY package.json package.json

# Install the dependencies in the container
RUN npm init -y 
RUN npm install 
ENV NODE_PATH=/workspace/node_modules

COPY . workspace
WORKDIR /workspace

EXPOSE 5000
CMD npm run server
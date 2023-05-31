FROM node:16-alpine
WORKDIR /workspace

#Copy package.json file in the node folder inside container
COPY package.json .

# Install the dependencies in the container
RUN npm install
ENV NODE_PATH=/workspace/node_modules

WORKDIR /workspace
COPY . .


EXPOSE 5173 5174 4173
CMD npm run build && npm run dev    
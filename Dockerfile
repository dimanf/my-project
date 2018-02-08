FROM  node:7.4

ADD . /opt/my-project
WORKDIR /opt/my-project
RUN npm install

CMD [ "npm", "run", "dev" ]
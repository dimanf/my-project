FROM ubuntu:16.04
MAINTAINER Anufriev Dmitry

RUN apt-get -yqq update
RUN apt-get -yqq install nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node
# RUN apt-get -yqq install yarn


ADD ./ /opt/my-project
WORKDIR /opt/my-project

RUN npm install -g npm
RUN npm run dev

EXPOSE 8080

FROM node:16  
# Installing libvips-dev for sharp Compatability  
RUN apt-get update && apt-get install libvips-dev -y  
ARG NODE_ENV=production  
ENV $(cat .env)  
WORKDIR /opt/  
COPY ./package.json ./yarn.lock ./  
ENV PATH /opt/node\_modules/.bin:$PATH  
COPY ../portfolio . 
WORKDIR /opt/app  
COPY ./ .  
RUN yarn build  
EXPOSE 1337  
CMD \["yarn", "start"\]
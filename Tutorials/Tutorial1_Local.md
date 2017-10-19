# On Your Computer - Containerizing an Application

## Have Your Application Handy

For this demo, I'm using a basic Node.js application that displays a web page.  You can find it in the MyApp directory in this repo. 

To use this application, copy or fork the repo from GitHub to a local directory on your machine.  Take note of the location of your application files.

## Build Your Docker File

Review the basic dockerfile in the application directory. This file will pull the latest available node image, created the the necessary directories, copy the application source files, install dependencies and then expose port 3000.

``` dockerfile
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
```

## Pull an Image from a Public Registry 

We will be using an Linux image with Node already installed as the base for our application.  The dockerfile will pull it down as needed, or you can pull it down first for fun. 

docker pull node:latest

## Create a Dockerfile to Customize the Image and Build the Image

docker build -t lisa17demo:v1 <path to dockerfile>

## Test the Image on Your Machine

docker run -p 3000:3000 lisa17demo:v1


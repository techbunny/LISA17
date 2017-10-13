# Have Your Application Handy
For this demo, I'm using a basic Node.js application that displays a web page.

# Pull an Image from a Public Registry 

docker pull node:latest

# Create a Dockerfile to Customize the Image and Build the Image

docker build -t lisa17demo:v1 <path to dockerfile>

# Test the Image on Your Machine

docker run -p 3000:3000 lisa17demo:v1


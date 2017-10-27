# Run a Docker Image

docker run -i -t -p 80:80 nginx:latest /bin/bash
docker run -d -p 80:80 nginx:latest

# Customize an Image

# Store Image in a Registry

az group create --name lisa17demo --location eastus
az acr create --name regdemo17 --resource-group lisa17demo --admin-enabled --sku Managed_Basic

az acr list --resource-group lisa17demo --query "[].{acrLoginServer:loginServer}" --output table

docker tag nginx regdemo17.azurecr.io

docker push lisa17reg2.azurecr.io/nginx:v1 

az acr repository list -n lisa17reg2 -o table
az acr repository show-tags -n lisa17reg2 --repository nginx -o table
az acr repository delete -n lisa17reg2 --repository ngnix


# Deploy to Azure Container Registry

az acr credential show --name lisa17reg2 --query "passwords[0].value"

az container create --name nginxtest --image lisa17reg2.azurecr.io/nginx:v1 --cpu 1 --memory 1 --registry-password dFs43D/aKfvtSar55RwPStQgsN9DC7u6 --ip-address public -g lisa17

az container show --name nginxtest --resource-group lisa17 --query state

az container show --name nginxtest --resource-group lisa17 --query ipAddress.ip

az container logs --name nginxtest -g lisa17

# Deploy to Azure Container Service (AKS)

az group create --name demoaks --location westus2

az aks create --resource-group demoaks --name firstaks --agent-count 1 --generate-ssh-keys

az aks kubernetes get-credentials --resource-group demoaks --name firstaks

kubectl run demosplash --image=regdemo17.azurecr.io/lisa17demo:v2

kubectl expose deployment demosplash --port=3000 --target-port=3000 --type=LoadBalancer

kubectl get service demosplash --watch

kubectl scale --replicas=5 deployment/demosplash

az aks scale --resource-group demoaks --name firstaks --agent-count 3

az aks get-versions --resource-group demoaks --name firstaks --output table
az aks upgrade --resource-group demoaks --name firstaks --kubernetes-version 1.8.1
az aks show --resource-group demoaks --name firstaks --output table

# Deploy to Azure Container Service (ACS)

# Create a Resource Group

az group create --name labcluster --location eastus

az acs create --orchestrator-type kubernetes --resource-group labcluster --name kuberlab --generate-ssh-keys

az acs kubernetes get-credentials --resource-group labcluster --name kuberlab 

kubectl get nodes

az acs kubernetes browse -g lisa17acs -n kubelisa17

kubectl run lisasplash --image=regdemo17.azurecr.io/lisa17demo:v2

kubectl expose deployment lisasplash --port=3000 --target-port=3000 --type=LoadBalancer

kubectl get service lisasplash --watch

kubectl scale --replicas=10 deployment/lisasplash
 


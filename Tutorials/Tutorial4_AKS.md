# Install Kubectl
On Windows, the default installation is c:\program files (x86)\kubectl.exe. You may need to add this file to the Windows path. 

az acs kubernetes install-cli

# Create a Resource Group

az group create --name testaks --location westus2

# Create Kubernetes Cluster

az aks create --resource-group testaks --name firstaks --agent-count 1 --generate-ssh-keys

# Connect with Kubectl

az aks get-credentials --resource-group testaks --name firstaks

# Browse to a Cluster with the UI

az aks browse --resource-group testaks --name firstaks

# Deploy a Container

kubectl run lisasplash --image=regdemo17.azurecr.io/lisa17demo:v2

kubectl expose deployment lisasplash --port=3000 --target-port=3000 --type=LoadBalancer

# Check on Deployment

kubectl get service lisasplash --watch

# Scale Containers

kubectl scale --replicas=5 deployment/lisasplash

# Scale Nodes

az aks scale --resource-group testaks --name firstaks --agent-count 3

# Upgrade Cluster
az aks get-versions --resource-group testaks --name firstaks --output table

az aks upgrade --resource-group testaks --name firstaks --kubernetes-version 1.8.1
 
az aks show --resource-group testaks --name firstaks --output table



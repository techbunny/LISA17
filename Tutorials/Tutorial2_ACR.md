# Moving Containers to the Cloud
To deploy a container to a cloud provider, you need to store your container image in a cloud accessible repository. 

## Connect to Azure
Before doing anything on Azure, you need log in with your credentials to access your subscription. 
```
az login
```
## Create a Resource Group
A resource group is collection of Azure components that share the same purpose or lifecycle. 
```
az group create --name lisa17 --location eastus
```
## Create a Container Registry
```
az acr create --name lisa17reg --resource-group lisa17 --admin-enabled --sku Managed_Basic

az acr list --resource-group lisa17 --query "[].{acrLoginServer:loginServer}" --output table
```
## Log in to ACR
```
az acr login --name lisa17reg 

az acr login --name lisa17reg --username lisa17reg --password <password string from portal>
```
## Push Image to ACR
Before pushing an image to the cloud registry, it has to be tagged with the full name of your registry login server.
```
docker tag lisa17:v3 lisa17reg2.azurecr.io/lisa17:v3

docker push lisa17reg2.azurecr.io/lisa17:v3
```
## List Images and Tags in ACR
```
az acr repository list -n lisa17reg2 -o table

az acr repository show-tags -n lisa17reg2 --repository lisa17 -o table
```


# Moving Containers to the Cloud

## Create a Resource Group

az group create --name lisa17 --location eastus

## Create a Container Registry

az acr create --name lisa17reg2 --resource-group lisa17 --admin-enabled --sku Managed_Basic

az acr list --resource-group lisa17 --query "[].{acrLoginServer:loginServer}" --output table

## Log in to ACR

az acr login --name lisa17reg2

## Push Image to ACR

docker tag lisa17:v3 lisa17reg2.azurecr.io/lisa17:v3

docker push lisa17reg2.azurecr.io/lisa17:v3

## List Images and Tags in ACR

az acr repository list -n lisa17reg2 -o table

az acr repository show-tags -n lisa17reg2 --repository lisa17 -o table


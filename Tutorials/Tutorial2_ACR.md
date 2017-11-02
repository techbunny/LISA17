# Moving Containers to the Cloud
To deploy a container to a cloud provider, you need to store your container image in a cloud accessible repository. 

## Connect to Azure
Before doing anything on Azure, you need log in with your credentials to access your subscription. 
```
az login
```
## Create a Resource Group
A resource group is collection of Azure components that share the same purpose or lifecycle.  It's recommended that you keep your Registry in a separate resource group from your deployments. 

NOTE: As we go through the tutorials you'll be creating several resource group in Azure. For reference they will be:

* Resource Group for Container Registry -  RGNAME1
* Resource Group for Container Instances - RGNAME2 (Suggest EASTUS or WESTUS)
* Resource Group for Azure Container Service (ACS) - RGNAME3
* Resource Group for Azure Container Service (AKS) - RGNAME4 (Must be in WESTUS or WESTUS2, due to preview of AKS)

```
az group create --name <RGNAME1> --location <LOC>
```
## Create a Container Registry

For this registry, we are creating a "Managed" registry, which includes additional features, particularly the ability to delete images once uploaded.  Other choices are Classic, Standard and Premium.

```
az acr create --name <ACRNAME> --resource-group <RGNAME1> --admin-enabled --sku Managed_Basic

az acr list --resource-group <RGNAME1> --query "[].{acrLoginServer:loginServer}" --output table
```
## Log in to ACR

```
az acr login --name <ACRNAME> 

az acr login --name <ACRNAME> --username <USERNAME> --password <password string from portal>
```
NOTE: The ACRNAME and USERNAME are usually the same.

## Push Image to ACR
Before pushing an image to the cloud registry, it has to be tagged with the full name of your registry login server.
```
docker tag <IMAGENAME>:v1 <ACRNAME>.azurecr.io/<IMAGENAME>:v1

docker push <ACRNAME>.azurecr.io/<IMAGENAME>:v1
```
## List Images and Tags in ACR
```
az acr repository list -n <ACRNAME> -o table

az acr repository show-tags -n <ACRNAME> --repository <IMAGENAME> -o table
```

Onward to [Tutorial #3](/Tutorials/Tutorial3_ACI.md)


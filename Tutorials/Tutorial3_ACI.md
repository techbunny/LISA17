# Get Credentials to ACR
Because ACR requires credentials, we must include those credentials when we deploy our container.
```
az acr show --name <ACRNAME> --query loginServer

az acr credential show --name <ACRNAME> --query "passwords[0].value"
```

# Deploy the Container in ACI
Because we want to keep our container deployments separate from our Registry, we need to create a new resource group.
```
az group create --name <RGNAME2> --location <LOC>
```

az container create --name <APPNAME> --image <acrLoginServer>/lisa17demo:v1 --cpu 1 --memory 1 --port 3000 --registry-password <acrPassword> --ip-address public -g <RGNAME2>
```
# View the State
```
az container show --name <APPNAME> --resource-group <RGNAME2> --query state
```
# Get the IP Address
```
az container show --name <APPNAME> --resource-group <RGNAME2> --query ipAddress.ip
```
# View the Logs
```
az container logs --name <APPNAME> -g <RGNAME2>
```

Go to [Tutorial #4](/Tutorials/Tutorial4_ACS.md)
# Get Credentials to ACR
ACR requires credentials, we must include those credentials when we deploy our container.  We found them in the portal in the last tutorial, but you can also get them with the CLI.
```
az acr show --name <ACRNAME> --query loginServer

az acr credential show --name <ACRNAME> --query "passwords[0].value"
```
# Deploy the Container in ACI
We want to keep our container deployments separate from our Registry, we need to create a new resource group.
```
az group create --name <RGNAME2> --location <LOC>
```
To create the container itself, we will give the deployment a name, reference the image in the repository, expose the required port, provide the repo password and indicate a public IP address is needed.
```
az container create --name <APPNAME> --image <acrLoginServer>/lisa17demo:v1 --cpu 1 --memory 1 --port 3000 --registry-password <acrPassword> --ip-address public -g <RGNAME2>
```
Once your container image is deployed, you can view the state of the deployment, get the IP address and check the logs.

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
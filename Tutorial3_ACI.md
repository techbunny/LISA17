# Get Credentials to ACR
Because ACR requires credentials, we must include those credentials when we deploy our container.

az acr show --name <acrName> --query loginServer

az acr credential show --name <acrName> --query "passwords[0].value"


# Deploy the Container in ACI

az container create --name aci-tutorial-app --image <acrLoginServer>/aci-tutorial-app:v1 --cpu 1 --memory 1 --registry-password <acrPassword> --ip-address public -g myResourceGroup

# View the State

az container show --name aci-tutorial-app --resource-group myResourceGroup --query state

# Get the IP Address

az container show --name aci-tutorial-app --resource-group myResourceGroup --query ipAddress.ip

# View the Logs

az container logs --name aci-tutorial-app -g myResourceGroup

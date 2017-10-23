# Get Credentials to ACR
Because ACR requires credentials, we must include those credentials when we deploy our container.

az acr show --name <acrName> --query loginServer

az acr credential show --name <acrName> --query "passwords[0].value"


# Deploy the Container in ACI

az container create --name lisa17splash --image <acrLoginServer>/lisa17demo:v1 --cpu 1 --memory 1 --port 3000 --registry-password <acrPassword> --ip-address public -g lisa17

# View the State

az container show --name lisa17splash --resource-group lisa17 --query state

# Get the IP Address

az container show --name lisa17splash --resource-group lisa17 --query ipAddress.ip

# View the Logs

az container logs --name lisa17splash -g lisa17

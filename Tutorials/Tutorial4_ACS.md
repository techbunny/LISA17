# Install Kubectl
On Windows, the default installation is c:\program files (x86)\kubectl.exe. You may need to add this file to the Windows path. 
```
az acs kubernetes install-cli
```
# Create a Resource Group
```
az group create --name <RGNAME3> --location <LOC>
```
# Create Kubernetes Cluster
```
az acs create --orchestrator-type kubernetes --resource-group <RGNAME3> --name <ACSNAME> --generate-ssh-keys
```
# Connect with Kubectl
```
az acs kubernetes get-credentials --resource-group <RGNAME3> --name <ACSNAME>

kubectl get nodes

az acs kubernetes browse -g <RGNAME3> -n <ACSNAME>
```
# Deploy a Container
```
kubectl run <APPNAME> --image <ACRNAME>.azurecr.io/<APPNAME>:v1

kubectl expose deployment <APPNAME> --port=3000 --target-port=3000 --type=LoadBalancer
```

# Scale Containers
```
kubectl scale --replicas=5 deployment/<APPNAME>
``` 



For a deployment of AKS, the managed Azure Container Service, you will be deploying only agent nodes into in your subscription.  It is recommended that you delete this resource group after you are finished with the tutorials, as they can quickly use up a free trial subscription. 

# Install Kubectl
If you haven't already isntalled it, you will need to have Kubectl on your computer to deploy a container after the AKS infrastructure is created. On Windows, the default installation is c:\program files (x86)\kubectl.exe. You may need to add this file to the Windows path. 
```
az acs kubernetes install-cli
```
# Create a Resource Group
```
az group create --name <RGNAME3> --location <LOC>  (Must be "westus" or "westus2", due to preview limitations.)
```
# Create Kubernetes Cluster
This single line will create the default AKS deployment with Kubernetes. This preview of AKS currently only supports Linux agents and workloads.
```
az aks create --resource-group <RGNAME3> --name <AKSNAME> --agent-count 1 --generate-ssh-keys
```
# Connect with Kubectl
```
az aks get-credentials --resource-group <RGNAME3> --name <AKSNAME>
```
# Browse to a Cluster with the UI
```
az aks browse --resource-group <RGNAME3> --name <AKSNAME>
```
# Deploy a Container
```
kubectl run <APPNAME> --image <ACRNAME>.azurecr.io/<IMAGENAME>:v1

kubectl expose deployment <APPNAME> --port=3000 --target-port=3000 --type=LoadBalancer
```
# Check on Deployment
```
kubectl get service <APPNAME> --watch
```
# Scale Containers
```
kubectl scale --replicas=5 deployment/<APPNAME>
```
# Scale Nodes
```
az aks scale --resource-group <RGNAME3> --name <AKSNAME> --agent-count 3
```
# Upgrade Cluster
```
az aks get-versions --resource-group <RGNAME3> --name <AKSNAME> --output table

az aks upgrade --resource-group <RGNAME3> --name <AKSNAME> --kubernetes-version 1.8.1
 
az aks show --resource-group <RGNAME3> --name <AKSNAME> --output table
```



# Install Kubectl
On Windows, the default installation is c:\program files (x86)\kubectl.exe. You may need to add this file to the Windows path. 

az acs kubernetes install-cli

# Create a Resource Group

az group create --name lisa17acs --location eastus

# Create Kubernetes Cluster

az acs create --orchestrator-type kubernetes --resource-group lisa17acs --name kubelisa17 --generate-ssh-keys

# Connect with Kubectl

az acs kubernetes get-credentials --resource-group lisa17acs --name kubelisa17

kubectl proxy

kubectl get nodes

az acs kubernetes browse -g lisa17acs -n kubelisa17


# Deploy a Container

kubectl run lisasplash --image=regdemo17.azurecr.io/lisa17demo:v2

kubectl expose deployment lisasplash --port=3000 --target-port=3000 --type=LoadBalancer


# Scale Containers

kubectl scale --replicas=5 deployment/lisasplash
 



# Install Kubectl
On Windows, the default installation is c:\program files (x86)\kubectl.exe. You may need to add this file to the Windows path. 

az acs kubernetes install-cli

# Create a Resource Group

az group create --name lisa17acs --location eastus

# Create Kubernetes Cluster

az acs create --orchestrator-type kubernetes --resource-group lisa17acs --name K8Slisa --generate-ssh-keys

# Connect with Kubectl

az acs kubernetes get-credentials --resource-group lisa17acs --name K8Slisa

kubectl proxy

kubectl get nodes



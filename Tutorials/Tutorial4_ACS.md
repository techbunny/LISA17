# Beyond a Single Instance

For a deployment of ACS (Azure Container Service), you will be deploying both agents and master nodes into a resource group in your subscription.  It is recommended that you delete this resource group after you are finished with the tutorials, as they can quickly use up a free trial subscription. 

## Install Kubectl

You will need to have Kubectl on your computer to deploy a container after the ACS infrastructure is created.  On Windows, the default installation is c:\program files (x86)\kubectl.exe. You may need to add this file to the Windows path. 
```
az acs kubernetes install-cli
```

## Create a Resource Group

```
az group create --name <RGNAME3> --location <LOC>
```

## Create Kubernetes Cluster

This single line will create the default ACS deployment using Kubernetes as the orchestrator of choice.  Both the master and the agent nodes will be running Linux.  There is a switch available to deploy Windows agent nodes if desired.

```
az acs create --orchestrator-type kubernetes --resource-group <RGNAME3> --name <ACSNAME> --generate-ssh-keys
```

## Connect with Kubectl

Once the deployment is compete, use this command to download the credentials to your machine to connect to the nodes.

```
az acs kubernetes get-credentials --resource-group <RGNAME3> --name <ACSNAME>

kubectl get nodes

az acs kubernetes browse -g <RGNAME3> -n <ACSNAME>
```

## Deploy a Container

```
kubectl run <APPNAME> --image <ACRNAME>.azurecr.io/<APPNAME>:v1

kubectl expose deployment <APPNAME> --port=3000 --target-port=3000 --type=LoadBalancer
```

## Scale Containers

```
kubectl scale --replicas=5 deployment/<APPNAME>
``` 

## Scale Nodes

If you would like to scale the agent nodes of the cluster you can find more information about that process [here](https://docs.microsoft.com/en-us/azure/container-service/kubernetes/container-service-scale).

NOTE: If you are using a free trial subscription, your cores quota can limit the number of agent nodes in a cluster.

Finally, head to [Tutorial #5](/Tutorials/Tutorial5_AKS.md)



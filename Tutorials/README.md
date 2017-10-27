# The Tutorials

## On Your Computer

Use a dockerfile to create a containerized application on your desktop.

To quickly get started creating containers on your computer, download either [Docker for Windows](https://www.docker.com/docker-windows) or [Docker for Mac](https://www.docker.com/docker-mac). One of the cool features of Docker for Windows is the ability to switch between Linux and Windows containers. 

Steps for Today's Demo - [Tutorial #1](/Tutorials/Tutorial1_Local.md)

For more information about getting started creating containers with Docker, I recommend their [Getting Started with Docker](https://docs.docker.com/get-started/) guide.

## Moving Images to the Cloud

Once you've created a container, you may want to deploy it to a cloud provider. To do that, you'll need to store your container image in a cloud accessible repository.  You can use [Docker Hub](https://hub.docker.com/) or [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-intro)

Steps for Today's Demo - [Tutorial #2](/Tutorials/Tutorial2_ACR.md)

For Azure Container Registry:

* [Create a Registry via the Portal](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal)
* [Push and Pull an image](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli)

## Deploy to Azure Container Instances

Azure Container Instances is the quickest way to get a container into Azure. You are not responsible for building, hosting or managing host resources in your Azure subscription. 

Steps for Today's Demo - [Tutorial #3](/Tutorials/Tutorial3_ACI.md)

* [Create Your First Container Instance](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart)
* [Deploy an Container Instance from Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-deploy-app)

## Deploy an Azure Container Service (ACS)

Azure Container Services (ACS) gives you more control over the container hosts behind your deployed containers, including the size and number of the agents and the orchestrator used. Azure Container Services currently supports Kubernetes, DC/OS and Docker Swarm (legacy Swarm, not Swarm Mode).

Steps for Today's Demo - [Tutorial #4](/Tutorials/Tutorial4_ACS.md)

* [Deploy Kubernetes on Azure Container Service](https://docs.microsoft.com/en-us/azure/container-service/kubernetes/container-service-kubernetes-walkthrough) - Linux or Windows
* [Deploy Docker Swarm on Azure Container Service](https://docs.microsoft.com/en-us/azure/container-service/dcos-swarm/container-service-swarm-walkthrough) - Linux only
* [Deploy DC/OS on Azure Container Service](https://docs.microsoft.com/en-us/azure/container-service/dcos-swarm/container-service-dcos-quickstart) - Linux only

## Deploy to Azure Container Service (AKS)

AKS is a new offering, currently in preview since 10/25/17. This differs from ACS as the master node for Kubernetes is managed by the service and visible within your subcription, as are the agents you deploy.  Other key differences as of this writing are that it is only available in limited regions and current does not support Windows Containers.

Steps for Today's Demo - [Tutorial #5](/Tutorials/Tutorial5_AKS.md)

* [Getting Started with Azure Container Service (AKS)](https://docs.microsoft.com/en-us/azure/aks/)
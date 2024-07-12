
### Deployed MongoDB and Mongo Express on Minikube cluster
We are going to deploy two applications, MongoDB and Express, which demonstrates a typical simple setup of a web application and its database. First, we will create a MongoDB pod and an internal service that only allows components inside the same cluster to talk to it. Then we’ll create an Express deployment and pass the database URL and credentials through environmental variables in its deployment configuration file. We’ll also create a config map containing the database URL and a secret containing the credentials, which we’ll reference in the deployment file. Next, we’ll create an external service to allow external requests to talk to the Express pod. With this setup, the request flow will be from the browser to the external service of Express, which will forward it to the Express pod. The pod will then connect to the internal service of MongoDB to authenticate the request using the credentials.”

Table of Contents:
Overview of Kubernetes, Minikube, and Hyper-V
Installing and Configuring Minikube and Hyper-V
Preparing and Deploying the MongoDB
Configuration and Deployment of Secret Service
Configuration and Deployment of Internal Service
Configuration and Deployment of Configmap
Configuration and Deployment of Mongo-express
Configuration and Deployment of external service
Conclusion
1. Overview of Kubernetes, Minikube, and Hyper-V
Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Minikube is a tool that allows you to run Kubernetes locally, simplifying the process of deploying and testing applications. Hyper-V is a virtualization technology developed by Microsoft, enabling you to create and run virtual machines on your personal computer.

2. Installing and Configuring Minikube and Hyper-V
Before we begin, ensure that you have the following prerequisites installed on your PC:

Windows 10 Pro or Enterprise
Hyper-V
kubectl
Minikube
Refer to the official documentation for detailed instructions on installing and configuring these tools.


### 00. Mongo Express YAML
![Mongo-express-yml](https://github.com/user-attachments/assets/1616290a-5313-4eba-aaa3-b2a8c01aa21d)


### 01. MongoDB YAML
![MongoDB-configmap-yml](https://github.com/user-attachments/assets/6083f5da-9021-41fe-b7f6-557e844ccfd7)

### 02. Mongo Secret YAML
![MongoDB-secret-yml](https://github.com/user-attachments/assets/d06186d8-c329-4ff1-9286-937aa24e3597)

### 03. Mongo ConfigMap YAML
![Mongo-configmap-yml](https://github.com/user-attachments/assets/dcea8e36-4a39-4544-b4b1-42706d4dbeca)

### 04. 
![Deployment](https://github.com/user-attachments/assets/65ccdd9a-cbfa-4a82-8b58-f089a4ee05fe)

### 05. Login To MongoDB Successfully
![Login MongoDB](https://github.com/user-attachments/assets/fc8886ab-a3e6-43a1-b3bf-6b8b5fbfe108)





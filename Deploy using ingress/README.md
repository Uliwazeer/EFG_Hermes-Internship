While getting started to write yaml manifest of various Kubernetes resources, we get confused on label, selector, name etc. Let’s go through Deployment, Service and Ingress manifests:

Deployment

# Deployment
...
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
...
Service

# Service
...
kind: Service
metadata:
  name: nginx-service
  labels:
    app: nginx
spec:
  type: NodePort
  ports:
  - name: http
    port: 80
    targetPort: http
  selector:
    app: nginx
...
Ingress

#Ingress
...
spec:
  rules:
  - host: a.domain.com
    http:
      paths:
      - backend:
          serviceName: nginx-service
          servicePort: 80
...
It’s confusing right? This illustration speaks a lot:
### 00. image1
![1_MW3_z3K1EDHiAuOXbMFydw](https://github.com/user-attachments/assets/0dcb0a5e-950c-44d0-a489-3565a6816d3b)

### 01. Deploy 1
![Deploy1](https://github.com/user-attachments/assets/eb775a51-55d1-4d43-ac29-97850d374e21)

### 02. Deploy 2
![Deploy2](https://github.com/user-attachments/assets/ddff076e-ed91-4ac1-993b-930388e0e537)

### 03. Fanout-Yml File 3
![Fanout-Yml](https://github.com/user-attachments/assets/9bc9b236-f20d-4ebc-93c2-c64083756e63)

### 04. service-app1 4
![Service-App1](https://github.com/user-attachments/assets/71967927-a594-41c0-ae75-d402f9279f06)

### 05. service-app2 5
![Service-App2](https://github.com/user-attachments/assets/3cef184d-692d-493c-9f18-d1419c19c050)

### 06. service-app3 6
![Service-App3](https://github.com/user-attachments/assets/3c54778e-8a28-4734-9ae2-a743fe1a547a)

### 07. powershell 1
![powershell1](https://github.com/user-attachments/assets/7518a88b-9c37-438d-b221-60b776d7214a)

### 08. powershell 2
![powershell2](https://github.com/user-attachments/assets/0662c7b0-bb10-4f50-94fb-61c4610a9449)

### 08. powershell 3
![powershell3](https://github.com/user-attachments/assets/dc2c3c64-e5a2-4615-9814-eee6cef49ba1)

### 09. Dashboard
![Dashboard](https://github.com/user-attachments/assets/baf17a87-b277-4327-a16d-c224106b098a)








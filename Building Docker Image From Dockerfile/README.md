Certainly! Here's a step-by-step guide on how to build a Docker image from a Dockerfile:

## Building a Docker Image from a Dockerfile

1. **Create a Dockerfile**: In your project directory, create a new file named `Dockerfile` (without any file extension) and add the following content:

   This Dockerfile uses the `mcr.microsoft.com/dotnet/sdk:6.0` image as the base for the build stage, then copies the project files, restores dependencies, builds the application, and publishes it. The final stage uses the `mcr.microsoft.com/dotnet/aspnet:6.0` image as the base and copies the published application files.

2. **Build the Docker image**: In the terminal, navigate to your project directory and run the following command to build the Docker image:

   ```
   docker build -t my-dotnet-app .
   ```

   This command will build the Docker image using the Dockerfile in the current directory and tag it as `my-dotnet-app`.

3. **Verify the image**: You can list the available Docker images on your system by running:

   ```
   docker images
   ```

   You should see the `my-dotnet-app` image in the list.

4. **Run the Docker container**: To run the Docker container based on the `my-dotnet-app` image, use the following command:

   ```
   docker run -p 8080:80 my-dotnet-app
   ```

   This command will start a new container, map port 80 of the container to port 8080 of the host machine, and run the .NET application inside the container.

5. **Verify the application**: Open your web browser and navigate to `http://localhost:8080` to access your .NET application running inside the Docker container.

## Pushing the Image to a Registry

If you want to share your Docker image with others or deploy it to a cloud platform, you can push it to a Docker registry, such as Docker Hub or a private registry.

1. **Log in to the registry**: If you're using Docker Hub, run the following command to log in:

   ```
   docker login
   ```

2. **Tag the image**: Before pushing the image, you need to tag it with the appropriate registry and repository name. For example:

   ```
   docker tag my-dotnet-app your-username/my-dotnet-app
   ```

3. **Push the image**: Now, you can push the image to the registry:

   ```
   docker push your-username/my-dotnet-app
   ```

Building a Docker image from a Dockerfile provides more control and flexibility over the container build process compared to the approach without a Dockerfile. The Dockerfile allows you to define the base image, copy files, restore dependencies, build the application, and configure the runtime environment for your .NET application.

This approach is recommended for more complex .NET applications or scenarios where you need more customization or automation in the build process. The Dockerfile-based approach also makes it easier to maintain and version control your application's build process.


### 00. Diagram Steps
![Diagram_Steps](https://github.com/Uliwazeer/EFG_Hermes-Internship/assets/84068430/c0d83f45-dd88-41f4-988a-bc3fa45a8cdf)


### 01. Dockerfile
![Dockerfile](https://github.com/Uliwazeer/EFG_Hermes-Internship/assets/84068430/6b644ef8-10a2-4153-b87d-d0ed1c5d70dc)


### 02. Commands
![commands](https://github.com/Uliwazeer/EFG_Hermes-Internship/assets/84068430/604971be-1ace-4a83-8758-8b19189cfc41)



### 03. Running Image1
![running image](https://github.com/Uliwazeer/EFG_Hermes-Internship/assets/84068430/236dd770-ec23-4f47-b2ba-32668ec8ae6e)


### 04. Running Image1
![running image2](https://github.com/Uliwazeer/EFG_Hermes-Internship/assets/84068430/25037ede-4cff-4c41-97bc-f606f12ba855)

### 05. Running Image1 Redis
![running redis image3](https://github.com/Uliwazeer/EFG_Hermes-Internship/assets/84068430/e1142558-3414-42a2-8dc2-215f177ea245)



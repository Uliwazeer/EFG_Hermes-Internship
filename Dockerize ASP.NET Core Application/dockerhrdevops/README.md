Prerequisites
Before we begin, make sure you have the following tools installed:

.NET Core SDK
Docker
Step 1: Create a .NET Application
For this tutorial, we’ll create a simple .NET Core console application. Open your terminal and run the following commands:

mkdir MyDotNetApp
cd MyDotNetApp
dotnet new console -n MyDotNetApp
This will create a new console application named MyDotNetApp.

Step 2: Dockerfile
A Dockerfile is a script that contains instructions for building a Docker image. Create a file named Dockerfile (Note: Dockerfile without any extension) in your project directory and add the following content:

# Use the official .NET Core runtime as the base image
FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app
# Use the official .NET Core SDK as the build image
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["MyDotNetApp.csproj", "./"]
RUN dotnet restore "./MyDotNetApp.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "MyDotNetApp.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "MyDotNetApp.csproj" -c Release -o /app/publish
# Build the final image using the base image and the published output
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyDotNetApp.dll"]
This Dockerfile does the following:

Sets up two build stages (base and build).
Restores dependencies, builds, and publishes the application.
Uses the dotnet runtime image as the base for the final image.
Sets the entry point for the container to run the application.
You can copy and paste the above Dockerfilecontents in your application, please make sure to replace MyDotNetApp with your application name.

If you want to understand the Dockerfile sytax then keep reading, if you want to go ahead then move to Step 3.

Let us now understand the Dockerfile in detail

# Use the official .NET Core runtime as the base image
FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app
FROM: This keyword specifies the base image you'll use to build your Docker image. In this case, you're using the official .NET Core runtime image with the version 5.0 as the base image. This base image already contains the necessary runtime environment for running .NET Core applications.
AS base: This line assigns a name "base" to this build stage. Docker allows you to use multiple build stages, and you can refer to them by their assigned names.
WORKDIR /app: This sets the working directory inside the container to /app. All subsequent commands in this build stage will be executed in this directory.
Next part of the Dockerfile:

# Use the official .NET Core SDK as the build image
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["MyDotNetApp.csproj", "./"]
RUN dotnet restore "./MyDotNetApp.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "MyDotNetApp.csproj" -c Release -o /app/build
FROM: Similar to the previous FROM instruction, this line specifies another base image. However, this time, you're using the .NET Core SDK image instead. The SDK image contains the tools necessary for building .NET applications.
AS build: Assigns a name "build" to this build stage.
WORKDIR /src: Sets the working directory inside the container to /src.
COPY ["MyDotNetApp.csproj", "./"]: Copies your project's .csproj file into the container's /src/ directory. This is the first step in copying your application code into the container.
RUN dotnet restore "./MyDotNetApp.csproj": Restores the NuGet packages specified in your project file (MyDotNetApp.csproj). This step ensures that all required dependencies are available for building your application.
COPY . .: Copies the rest of your application code (all files and folders) from your host machine into the /src/ directory inside the container.
WORKDIR "/src/": Changes the working directory to /src/ within the container. This is done to execute the subsequent build commands from the correct directory.
RUN dotnet build "MyDotNetApp.csproj" -c Release -o /app/build: This command builds your .NET application in Release mode (-c Release) and places the output in the /app/build directory within the container. The -o flag specifies the output directory.
The next part of the Dockerfile:

# Build the final image using the base image and the published output
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyDotNetApp.dll"]
FROM base AS final: This sets up the final build stage, named "final," and uses the base image defined in the first stage.
WORKDIR /app: Sets the working directory to /app within the container.
COPY --from=publish /app/publish .: Copies the published output from the "publish" stage (which you'll define later in the Dockerfile) into the current directory in the "final" stage. This includes your compiled .NET application and its dependencies.
ENTRYPOINT ["dotnet", "MyDotNetApp.dll"]: Specifies the command that should be executed when the Docker container is started. In this case, it runs your .NET application by invoking dotnet MyDotNetApp.dll.
Step 3: Build the Docker Image
Open your terminal, navigate to the project directory containing the Dockerfile, and run the following command to build the Docker image:

docker build -t mydotnetapp .
This command tags the image as mydotnetapp. Make sure to include the dot at the end of the command, indicating the current directory as the build context.

Step 4: Create a Docker Hub Account
Docker Hub is like GitHub but for your docker images. Using DockerHub you can share your images with others also you can use others images in your projects.

To upload your Docker image to Docker Hub, you need a Docker Hub account. If you don’t have one, follow these steps:

Go to Docker Hub in your web browser.
Click the “Sign Up” button and follow the registration process to create your account.
Step 5: Log In to Docker Hub
Once you have a Docker Hub account, log in to Docker Hub from your terminal using the following command:

docker login
You will be prompted to enter your Docker Hub username and password.

Step 6: Push the Docker Image to Docker Hub
To push your Docker image to Docker Hub, use the following command:

docker tag mydotnetapp <your-docker-hub-username>/mydotnetapp:v1
Replace <your-docker-hub-username> with your actual Docker Hub username.

Next, push the image to Docker Hub:

docker push <your-docker-hub-username>/mydotnetapp:v1
This command will upload your Docker image to Docker Hub. You can change v1 to a different version tag if needed.

Here mydotnetapp is the same tag which we used to generate the the docker image.

Step 7: Deploying the Docker Image
To run your Dockerized .NET application on a server or cloud platform, follow these steps:

Ensure Docker is installed on the server.
Log in to your Docker Hub account on the server using docker login.
Pull the Docker image you uploaded to Docker Hub:
docker pull <your-docker-hub-username>/mydotnetapp:v1
4. Run the Docker container:

docker run -d -p 8080:80 --name mydotnetapp <your-docker-hub-username>/mydotnetapp:v1
This command starts a container named mydotnetapp and maps port 8080 on the host to port 80 inside the container. Adjust the port mapping and container name as needed.

5. Access your .NET application by visiting http://your-server-ip:8080 in a web browser.

That’s it! You’ve successfully dockerized a .NET application, uploaded it to Docker Hub, and deployed it to a server. Docker makes it easy to package and distribute your applications, ensuring consistency across different environments.

If you find yourself in a situation where you need assistance or have any questions related to this article, please feel free to leave a comment below. I typically provide timely responses.

And that’s a wrap! If you’ve read this far, it means you liked this article. If that’s true, please leave a clap. I publish similar articles every week, so feel free to follow me for more.
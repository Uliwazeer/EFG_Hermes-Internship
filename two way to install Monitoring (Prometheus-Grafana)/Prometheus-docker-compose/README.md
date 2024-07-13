Prerequisites:

Before diving into the setup process, make sure you have the following prerequisites in place:

AWS EC2 Instance: Create an EC2 instance running Ubuntu.
SSH Access: Ensure you have SSH access to your EC2 instance.
Basic Linux Knowledge: Familiarity with basic Linux commands will be beneficial.
Let’s get started! ✌️

Step 1: Create a Dedicated Prometheus User

To enhance security and streamline administration, it’s best to create a dedicated user for Prometheus. This user will serve as a system account for the service. Run the following command:

sudo useradd \
 - system \
 - no-create-home \
 - shell /bin/false prometheus
--system: Creates a system account.
--no-create-home: We don't need a home directory for Prometheus.
--shell /bin/false: Prevents logging in as a Prometheus user.
Step 2: Download and Extract Prometheus

Let’s fetch the latest version of Prometheus from the official download page using wget:

wget https://github.com/prometheus/prometheus/releases/download/v2.45.0/prometheus-2.45.0.linux-amd64.tar.gz
Now, extract the Prometheus files:

tar -xvf prometheus-2.45.0.linux-amd64.tar.gz
Step 3: Create Directories for Prometheus

Create the necessary directories for Prometheus and its configuration files:

sudo mkdir -p /data /etc/prometheus
Navigate to the Prometheus directory:

cd prometheus-2.32.1.linux-amd64
Move Prometheus and promtool binaries to /usr/local/bin/:

sudo mv prometheus promtool /usr/local/bin/
Optionally, move console libraries to the Prometheus configuration directory:

sudo mv consoles/ console_libraries/ /etc/prometheus/
Lastly, move the example Prometheus configuration file:

sudo mv prometheus.yml /etc/prometheus/prometheus.yml
Step 5: Set Correct Ownership

Ensure the correct ownership for /etc/prometheus/ and /data/ directories:

sudo chown -R prometheus:prometheus /etc/prometheus/ /data/
Step 6: Verify Prometheus Installation

Check if Prometheus is installed correctly by running:

prometheus --version
For more information and configuration options, use the prometheus --help command.

Step 7: Configure Prometheus as a systemd Service

To manage Prometheus using systemd, create a systemd unit configuration file:

sudo vim /etc/systemd/system/prometheus.service
Add the following content to the file:

[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

StartLimitIntervalSec=500
StartLimitBurst=5

[Service]
User=prometheus
Group=prometheus
Type=simple
Restart=on-failure
RestartSec=5s
ExecStart=/usr/local/bin/prometheus \
  --config.file=/etc/prometheus/prometheus.yml \
  --storage.tsdb.path=/data \
  --web.console.templates=/etc/prometheus/consoles \
  --web.console.libraries=/etc/prometheus/console_libraries \
  --web.listen-address=0.0.0.0:9090 \
  --web.enable-lifecycle

[Install]
WantedBy=multi-user.target[Install]
WantedBy=multi-user.target
Key options to note in the systemd unit file:

User and Group: Specify the Linux user and group for Prometheus.
--config.file: Path to the main Prometheus configuration file.
--storage.tsdb.path: Location to store Prometheus data.
--web.listen-address: Configured to listen on all network interfaces.
--web.enable-lifecycle: Allows managing Prometheus without restarting.
Step 8: Enable and Start Prometheus

Enable Prometheus to start on boot:

sudo systemctl enable prometheus
Start Prometheus:

sudo systemctl start prometheus
Check the status of Prometheus:

sudo systemctl status prometheus
Step 9: Access Prometheus Web Interface

Access the Prometheus web interface by opening your browser and navigating to your EC2 instance’s public IP address on port 9090 (e.g., http://your-instance-ip:9090).

### prometheus Dashboard
![prometheus-dashboard](https://github.com/user-attachments/assets/b7827f99-eb1f-4fe4-b25f-5546817303a2)



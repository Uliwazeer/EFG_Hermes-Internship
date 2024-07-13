Step 10: Install and Configure Node Exporter

Next, we will set up Node Exporter to collect system metrics from your EC2 instance. Node Exporter exposes these metrics in Prometheus format.

Step 11: Create a System User for Node Exporter

Create a system user for Node Exporter with the following command:

sudo useradd \
    --system \
    --no-create-home \
    --shell /bin/false node_exporter
Step 12: Download and Install Node Exporter

Download Node Exporter:

wget https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz
Extract Node Exporter:

tar -xvf node_exporter-1.6.1.linux-amd64.tar.gz
Move the Node Exporter binary to /usr/local/bin/:

sudo mv node_exporter-1.3.1.linux-amd64/node_exporter /usr/local/bin/
Step 13: Create a systemd Service for Node Exporter

Create a systemd unit configuration file for Node Exporter:

sudo vim /etc/systemd/system/node_exporter.service
Add the following content to the file:

[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target
StartLimitIntervalSec=500
StartLimitBurst=5
[Service]
User=node_exporter
Group=node_exporter
Type=simple
Restart=on-failure
RestartSec=5s
ExecStart=/usr/local/bin/node_exporter \
    --collector.logind
[Install]
WantedBy=multi-user.target
Step 14: Enable and Start Node Exporter

Enable Node Exporter to start on boot:

sudo systemctl enable node_exporter
Start Node Exporter:

sudo systemctl start node_exporter
Check the status of Node Exporter:

sudo systemctl status node_exporter
Step 15: Add Node Exporter as a Target in Prometheus

sudo vim /etc/prometheus/prometheus.yml
Add the following job configuration for Node Exporter:

- job_name: 'node_export'
    static_configs:
      - targets: ["localhost:9100"]
This configuration tells Prometheus to scrape metrics from Node Exporter, which runs on port 9100 by default.

Step 16: Reload Prometheus Configuration

Before reloading the configuration, validate it:

promtool check config /etc/prometheus/prometheus.yml
Reload Prometheus configuration without restarting the service:

curl -X POST http://localhost:9090/-/reload
Step 17: Install Grafana for Visualization

Grafana is a powerful visualization tool that works seamlessly with Prometheus. Install Grafana by following these steps:

Ensure dependencies are installed:
sudo apt-get install -y apt-transport-https software-properties-common
Add the Grafana GPG key:
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
Add the Grafana repository for stable releases:
echo "deb https://packages.grafana.com/oss/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
Update and install Grafana:
sudo apt-get update
sudo apt-get -y install grafana
Step 18: Enable and Start Grafana

Enable Grafana to start on boot:

sudo systemctl enable grafana-server
Start Grafana:

sudo systemctl start grafana-server
Check the status of Grafana:

sudo systemctl status grafana-server
Step 19: Access Grafana Web Interface

Access the Grafana web interface by opening your browser and navigating to your EC2 instance’s public IP address on port 3000 (e.g., http://your-instance-ip:3000). Log in using the default credentials (username: admin, password: admin).

Step 20: Customize Grafana Settings

After your initial login to Grafana, you will have the opportunity to change your password. Let’s set the new password to “newpassword@123”
Step 21: Add Prometheus Data Source

To visualize metrics, you need to add a data source in Grafana. Follow these steps:
Click on the gear icon (⚙️) in the left sidebar to access the Configuration menu.
Select “Data Sources” and click “Add data source.”
Choose “Prometheus” as the data source type.
In the URL field, enter http://localhost:9090 and click "Save & Test." You should see a message indicating that the data source is working correctly.
Step 22: Provision Data Source as Code

In production environments, it’s common to store configurations in version control systems like Git. To add the data source as code, let’s remove the data source we added through the UI:
Go back to the “Data Sources” page in Grafana.
Delete the Prometheus data source.
Step 23: Create a Datasources Configuration File

Create a new datasources.yaml file for provisioning the data source as code:
sudo vim /etc/grafana/provisioning/datasources/datasources.yaml
Add the following content to the datasources.yaml file:
apiVersion: 1
datasources:
  - name: Prometheus
    type: prometheus
    url: http://localhost:9090
    isDefault: true
Optionally, you can set this data source as the default one.
Step 24: Restart Grafana to Apply Configuration Changes

Restart Grafana to apply the new configuration:
sudo systemctl restart grafana-server
Go back to the Grafana web interface and refresh the page. You should now see the Prometheus data source listed.
Step 25: Create a Simple Graph in Grafana

Let’s create a simple graph to visualize Prometheus metrics:
Go to Grafana and click “Create Dashboard,” then add a new panel.
Give the panel a title, such as “Scrape Duration,” and paste the scrape_duration_seconds metric.
You can adjust the time interval to 1 hour for a more detailed view.
Configure the legend to use the “job” label and set the unit to “seconds.”
Click “Apply” and save the dashboard as “Prometheus.”
Step 26: Import Node Exporter Dashboard

Since you already have Node Exporter running, you can import an open-source dashboard to visualize CPU, Memory, Network, and other metrics. Follow these steps:
Visit the Grafana website’s dashboard section at https://grafana.com/grafana/dashboards/.
Search for “node exporter” to find available dashboards.
Copy the dashboard ID (e.g., 1860) to your clipboard.
In Grafana:

Click “Create” in the left sidebar to create a new dashboard.
Click “Import” and paste the dashboard ID you copied earlier.
Load the dashboard and select the Prometheus data source.
Click “Import.”
Step 27: Explore Node Exporter Metrics

You now have access to a wide range of metrics from Node Exporter on your Grafana dashboard. These metrics include CPU, Memory, Network, and more. You can explore and customize the dashboard further to suit your monitoring needs.
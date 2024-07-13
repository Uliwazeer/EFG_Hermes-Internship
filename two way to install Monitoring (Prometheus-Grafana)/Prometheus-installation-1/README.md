Sure, here's a sample `README.md` file that covers the steps to install Prometheus without using Docker:

```markdown
# Prometheus Installation Guide (without Docker)

Prometheus is an open-source monitoring and alerting system that collects and stores time-series data. This guide will walk you through the process of installing Prometheus on your system without using Docker.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Go programming language (version 1.13 or later)
- Git

## Installation

1. **Download the Prometheus binary:**

   ```
   wget https://github.com/prometheus/prometheus/releases/download/v2.37.0/prometheus-2.37.0.linux-amd64.tar.gz
   ```

   Replace `v2.37.0` with the latest version of Prometheus available on the [Prometheus releases page](https://github.com/prometheus/prometheus/releases).

2. **Extract the Prometheus archive:**

   ```
   tar -xvzf prometheus-2.37.0.linux-amd64.tar.gz
   ```

3. **Move the Prometheus binaries to a suitable location:**

   ```
   sudo mv prometheus-2.37.0.linux-amd64 /usr/local/prometheus
   ```

4. **Create a systemd service file for Prometheus:**

   Create a new file named `prometheus.service` in the `/etc/systemd/system/` directory with the following content:

   ```
   [Unit]
   Description=Prometheus
   Wants=network-online.target
   After=network-online.target

   [Service]
   User=prometheus
   Group=prometheus
   Type=simple
   ExecStart=/usr/local/prometheus/prometheus \
     --config.file=/usr/local/prometheus/prometheus.yml \
     --storage.tsdb.path=/usr/local/prometheus/data
   ExecReload=/bin/kill -HUP $MAINPID
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

5. **Create the Prometheus user and group:**

   ```
   sudo useradd --no-create-home --shell /bin/false prometheus
   ```

6. **Create the Prometheus data directory:**

   ```
   sudo mkdir /usr/local/prometheus/data
   sudo chown prometheus:prometheus /usr/local/prometheus/data
   ```

7. **Start the Prometheus service:**

   ```
   sudo systemctl daemon-reload
   sudo systemctl start prometheus
   sudo systemctl enable prometheus
   ```

8. **Verify the Prometheus installation:**

   Open your web browser and navigate to `http://localhost:9090`. You should see the Prometheus web interface.

## Configuring Prometheus

After installing Prometheus, you can customize the configuration by editing the `prometheus.yml` file located in the `/usr/local/prometheus/` directory.

For more detailed instructions on configuring Prometheus, please refer to the [Prometheus documentation](https://prometheus.io/docs/introduction/overview/).

## Conclusion

This guide has provided the steps to install Prometheus without using Docker. By running Prometheus as a systemd service, you can ensure that it starts automatically on system boot and is managed by the system's process management.

For more information and advanced Prometheus usage, please refer to the official Prometheus documentation.
```

This README.md file covers the following aspects of Prometheus installation without using Docker:

1. Prerequisites
2. Installation steps:
   - Downloading the Prometheus binary
   - Extracting the Prometheus archive
   - Moving the Prometheus binaries to a suitable location
   - Creating a systemd service file for Prometheus
   - Creating the Prometheus user and group
   - Creating the Prometheus data directory
   - Starting the Prometheus service
   - Verifying the Prometheus installation
3. Configuring Prometheus
4. Conclusion and references to the official Prometheus documentation




### Metrices Of Instance
![Metrices](https://github.com/user-attachments/assets/accd4856-f00c-411f-ba20-e924155bc2ac)

### Image show prometheus gui
![images](https://github.com/user-attachments/assets/5a723b8b-841b-4a55-b162-3fc5a2ef11bc)

### prometheus dashboard
![prometheus-dashboard](https://github.com/user-attachments/assets/6fa32691-0b91-4f15-99dc-8f196ef011d1)

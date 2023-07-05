# SSL Proxy
A simple and easy to install SSL proxy. Can use different ports and standalone certificate files.

# Usage

1) First, install the dependencies.

```shell
npm install
```

2) Then replace the files `default.crt`, `default.key`, and `default.ca` with your own SSL files, within the `/assets/ssl` directory.

3) You can change the proxy listening port (default is 443), the proxy redirecting port (default is 80), and rename the CRT and KEY files' path by editing `index.js`.

4) Change the CHMOD of the file `stop.sh`.

```shell
chmod 755 stop.sh
```

5) Now just run the script.

```shell
npm start
```

The proxy will start straight away. You can stop the script by using the command ```npm stop```.  
Restart is required if you are updating your SSL files or changing the proxy ports.

## Self-Signed Certificates

The proxy supports self-signed certificates, without usage of Certificate Autority (CA) Bundles. To run a self-signed certificate and read only your SSL key and certificate, use `npm start-self`.

# Compatibility

Tested on Linux Ubuntu 20.04 LTS. Should work nicely on MacOS X, but the script hasn't been tested on Windows.

# Credit

This is a free to use, and free to distribute repository by Nova Network, created by Paulo Baronceli. Use at your own risk, and we accept no liability from the usage of this script.

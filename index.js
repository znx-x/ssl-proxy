// By default requires a Private Key (default.key), a Certificate (default.crt),
// and a CA Bundle (default.ca). If you are using a self-signed certificate without
// a CA Bundle, you will have to start the server using 'index-self.js' instead.

var httpProxy = require('http-proxy');
var fs = require('fs');

// Sets the target for the proxy. You can use either an IP, localhost, or a domain.
// For 'https' use port: 443
// For 'http' use port: 80

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 80
 },

// Sets the key, certificate, and ca bundle paths within your local machine.

 ssl: {
    key: fs.readFileSync(
    './assets/ssl/default.key', 'utf8'),
    cert: fs.readFileSync(
    './assets/ssl/default.crt', 'utf8'),
    ca: fs.readFileSync(
    './assets/ssl/default.ca', 'utf8')
 }

// .listen defines the destination port of the proxy. If you are just using this
// proxy to install an SSL certificate and want the target to be accessible via
// https, the default port to use is '443'.

}).listen(
   443
).on('error', function(e) {
  console.log(JSON.stringify(e, null, ' '))
});

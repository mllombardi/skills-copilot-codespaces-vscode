// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// Use the createServer method of the http module to create a new server.
// Use the listen method to listen on port 3000.
// Use the createReadStream method of the fs module to serve the comments.html file.
// Make sure to set the Content-Type to text/html.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('comments.html').pipe(res);
}).listen(3000, () => console.log('Server running on http://localhost:3000/'));
// Require the Express module and create an Express application
const express = require('express');
const app = express();

// Create an HTTP server using the Express application
const http = require('http').Server(app);

// Serve static files from the 'www' directory
// (replace 'www' with your directory name)
app.use(express.static(__dirname + '/www'));

// Start the server to listen on port 3000
let server = http.listen(3000, function () {
    // const host = "localhost";

    // Get the server's listening address and the port number
    let host = server.address().address;
    let port = server.address().port;

    console.log('NodeJS Server');
    console.log(`Server listening on: ${host} port: ${port}`);
});

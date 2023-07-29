// Require the Express module and create an Express application
const express = require('express');
const app = express();
const path = require('path');
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Create an HTTP server using the Express application
const http = require('http').Server(app);

// Start the server to listen on port 3008
let server = http.listen(3008, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`NodeJS Server listening on: ${host} port: ${port}`);
    console.log('http://localhost:' + port);
});

app.get('/account', function (res, res) {
    res.sendFile(__dirname + '/public/account.html');
})

// app.post('/login', function (res, res) {
//     res.sendFile(__dirname + '/public/index.html');
// })


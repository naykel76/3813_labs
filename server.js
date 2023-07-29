// Require the Express module and create an Express application
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Create an HTTP server using the Express application
const http = require('http').Server(app);

// Middleware to parse JSON data in place of body-parser
app.use(express.json());

// When a client submits a form in HTML, the data from the form fields is
// encoded in the URL-encoded format and sent as part of an HTTP POST request.
// This data needs to be parsed by the server to access the form field values.
// That's where the express.urlencoded() middleware comes into play.
app.use(express.urlencoded({ extended: true }));

// Start the server to listen on port 3008
const server = http.listen(3008, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`NodeJS Server listening on: ${host} port: ${port}`);
    console.log('http://localhost:' + port);
});

app.get('/account', function (res, res) {
    res.sendFile(__dirname + '/public/account.html');
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', function (req, res) {

    if (!req.body) {
        return res.sendStatus(400);
    }

    const { username, password } = req.body;

    if (username === 'billy27' && password === 'password') {
        const userInfo = {
            username: username,
            email: 'heyhey@gmail.com',
        };
        res.json(userInfo);
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }

});

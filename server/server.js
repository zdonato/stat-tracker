let express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser');

const PORT = 8080;

app.set('port', PORT);

/* Middleware */
app.use(bodyParser.json());

/* Routes */
let index = require('./routes/index');
let records = require('./routes/records');

app.use('/', index);
app.use('/records', records);

/* Static Routes */
app.use('/public', express.static(path.join(__dirname, 'public/')));

let server = http.createServer(app);
server.listen(PORT);

console.log("Now listening on port... ", PORT);
const express = require("express");
const http = require("https");
const port = process.env.PORT || 8080;

const app = express();
const folder = __dirname + '/client';

app.use(express.static(folder));


app.get('/app', (req, res) => {
    res.sendFile(folder + "/index.html");
});

app.listen(port, () => {
    console.log('App li>Fstening on port ' + port);
});
const express = require('express');
require("./config/db");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//MIDDLEWRES (it is used whenever a route request is made, this fuction will execute. Mainly its used for authetication)
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const ticketsRoute = require('./routes/tickets');
//INCLUDE ROUTES LIKE, USERS, TICKETS ETC
app.use('/tickets', ticketsRoute);

app.get('/', function (req, res) {
    res.send("ROOT");
});

//STAR THE SERVER
// app.listen(5000);

// const host = 'localhost';
// const port = 3000;

const host = '0.0.0.0';
const port = process.env.PORT || 5000;

app.listen(port, host, function () {
    console.log("Server started.......");
});
// app.listen(process.env.PORT || 5000)

//THATS HOW TO CALL FROM FRONTEND
// fetch("http://localhost:3000/tickets/").then(result => {
//     return result.json();
// }).then(data => {
//     console.log(data);
// });
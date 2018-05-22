require('dotenv').config();
var petRoutes = require("./routes/pet-api-routes.js");
var userRoutes = require("./routes/user-api-routes.js");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("../public"));

app.use('/api/pets', petRoutes);
app.use('/api/users', userRoutes);

// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
// });
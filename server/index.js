var express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/pet-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
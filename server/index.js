// require('dotenv').config();
var petRoutes = require("./routes/pet-api-routes.js");
var userRoutes = require("./routes/user-api-routes.js");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var pets = require ('../api/pet.js')
const keys = require('../keys.js');

var app = express();
// var PORT = process.env.PORT || 8080;

// var db = require("./models");
console.log(keys.petfinder.api_key);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

// app.use('/', express.static(`${__dirname}/client/build`))

app.use('/api/getdogs', petRoutes);
app.use('/api', userRoutes);

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//app.get('/api/getdogs', pets.GetDogs)

// db.sequelize.sync({ force: true }).then(function() {
// app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });
// });

module.exports = app;
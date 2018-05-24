var path = require('path');
require('dotenv').config({ path: path.resolve('..', '.env') });

const keys = require('../keys.js');
const api_key = keys.petfinder.api_key;
const api_secret = keys.petfinder.api_secret;

console.log(api_key);
console.log(api_secret);

// PETFINDER
//Import module Impo
var petfinder = require('petfinder')(api_key, api_secret);
// Get list of breeds
petfinder.getBreedList('cat', function(err, breeds) {
    console.log(breeds)
});
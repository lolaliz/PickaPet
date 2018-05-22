import axios from 'axios';
require('dotenv').config();
const keys = require('../keys.js');

const api_key = keys.petfinder.api_key;
const api_secret = keys.petfinder.api_secret;

export default {
 zip = 92110,
  //put pefinder api info in here
  getLocalDogs: (zip) => {
    return axios.get('http://api.petfinder.com/pet.getRandom?key=' + api_key + 
    '&animal=dog&location=' + zip + '&output=basic&format=json&callback=?')
    .then (response => {
        console.log (response.data)
        
    })

  }
 
};
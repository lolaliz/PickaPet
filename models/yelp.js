require('dotenv').config();
const keys = require('../keys.js');
const apiKey = keys.yelp.api_key;

var yelp = require('yelp-fusion');
var client = yelp.client(apiKey);

//get user zip from database??
var userZip = 92128;
//
var searchTermButton = 'pet-friendly restaurant'; 
/*dog park, pet store, or pet friendly restaurant. Get it from button clicked*/

const searchRequest = {
  term: searchTermButton,
  location: userZip,
};

const getParks = function(searchRequest) {
  client.search(searchRequest).then(response => {
    const results = response.jsonBody.businesses;
    const resultsArray = [];
    for (let i = 0; i < 5; i++) {
      const result = results[i];
    //   let prettyJson = JSON.stringify(firstResult, null, 4);
      const location = result.location;
        resultInfo = {
          resultNum: i + 1,
          name: result.name,
          coordinates: result.coordinates,
          address: location.address1 + ", " + location.city + ", " + location.state + " " + location.zip_code
        }
        resultsArray.push(resultInfo);
  }
  
  console.log(resultsArray);
  }).catch(e => {
    console.log(e);
  });
}

getParks(searchRequest);
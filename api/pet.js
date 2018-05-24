var path = require('path');
require('dotenv').config({ path: path.resolve('..', '.env') });

const keys = require('../keys.js');
const api_key = keys.petfinder.api_key;
const api_secret = keys.petfinder.api_secret;

console.log(api_key);
console.log(api_secret);


var petfinder = require('petfinder')(api_key, api_secret);

exports.GetDogs =function(req, res) { 
petfinder.findPet('92110',{'count': 5,'animal':'dog', 'size':'M', 'breed': 'Rottweiler'}, function(err, response ) {
  
  const petArray = [];
  for (let i = 0; i < 5; i++){
    const pets = response[i];

    let petInfo = {
      petNum: i + 1,
      petName: pets.name,
      petID: pets.id,
      petSize: pets.size,
      petBreed: pets.breeds,
      petDescrip: pets.description,
      petPhotos: pets.media.photos,
      petContact: pets.contact
    }
   petArray.push(petInfo)
  
  }
 res.send (petArray)
});
}

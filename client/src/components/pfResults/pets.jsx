import React, { Component } from 'react';
//import API from '../../utils/API.js';
//import axios from 'axios'to get used later
import petfinder from 'pet-finder-api'

const keys = require('../../keys.js');

const api_key = keys.petfinder.api_key;
const api_secret = keys.petfinder.api_secret;

let petfinderAPI = petfinder(api_key,api_secret)
class Pets extends Component {

    state = {
        zip: 92110
    };

    componentDidMount () {
        // API.getLocalDogs(this.state.zip)
        // .then(res =>{
        //     console.log(res.data)
        // })
        petfinderAPI.getBreedList('cat', function(err, breeds) {
            console.log(breeds)
          }); 
    }

    render() {
        return (
          <div className="container PetResults">
            <h3>Here are your possible matches:</h3>
           
          </div>
        )
      }
}

export default Pets
//<p>Username: {this.state.username}</p>
            //<p>Email: {this.state.email}</p>
            //<Link to="/">Go home</Link>
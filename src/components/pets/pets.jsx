import React, { Component } from 'react';
import axios from 'axios'


//import petfinder from 'pet-finder-api'

//const keys = require('../keys.js');

//const api_key = keys.petfinder.api_key;
//const api_secret = keys.petfinder.api_secret;

//let petfinderAPI = petfinder(api_key,api_secret)
class Pets extends Component {
//need to set state to pass in zip from survey
    //state = {
       // zip: 92110
    //};

    componentDidMount () {
       axios.get('/api/getdogs')
       .then(function (res){
         console.log(res,'pet component did mount')
       })
        
    }

    render() {
        return (
          <div className="container PetResults">
            <h3>Here are your possible matches:</h3>
            <div>
                <span className="pet-name"></span>
            </div>
            <img className="pet-image"></img>
           <p className="pet-description"></p>
           
          </div>
        )
      }
}

export default Pets

//
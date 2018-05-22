import React, { Component } from 'react';
import API from '../utils/API.js';
import axios from 'axios'

class Pets extends Component {

    state = {
        zip: 92110
    };

    componentDidMount () {
        API.getLocalDogs(this.state.zip)
        .then(res =>{
            console.log(response.data)
        })
    }

    render() {
        return (
          <div className="container PetResults">
            <h3>Here are your possible matches:</h3>
           
          </div>
        )
      }
}

//<p>Username: {this.state.username}</p>
            //<p>Email: {this.state.email}</p>
            //<Link to="/">Go home</Link>
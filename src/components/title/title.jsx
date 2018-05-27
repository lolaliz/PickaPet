import React, { Component } from 'react';
// import './title.css';

class Title extends Component {
  render() {
    return (
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br />
            <br />
            <h1 className="header center yellow-text text-lighten-2 ">Pick-a-Pet</h1>
            <br />
            <br />
          </div>
        </div>
        <div className="parallax"><img src="../assets/images/dog_background.jpg" alt="Unsplashed background img 1" /></div>
        </div>
    )
  }
}

export default Title;
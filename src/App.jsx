import React , { Component } from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import './App.css'
import Home from './components/layouts/home.jsx'
import Survey from './components/layouts/survey.jsx'
import Results from './components/layouts/results.jsx'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user : null ,
      username : "" ,
      welcome : ""
    }
  }
  
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/Survey' component = {Survey} /> 
            <Route exact path = '/Results' component = {Results} />
        </Switch> 
      </BrowserRouter>
    )
  }
}

export default App

// import React, { Component } from 'react';

// import logo from './logo.svg';

// import './App.css';

// class App extends Component {
//   state = {
//     response: ''
//   };

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">{this.state.response}</p>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SignUp from './app/components/Auth/SignUp.js';
import Welcome from './app/components/Auth/Welcome';

class App extends Component {
  render(){
    return(
      <Router>
        <Scene
          key='main'
        >
          <Scene
            key='Signup'
            component={ SignUp }
          />
          <Scene
            key='Welcome'
            initial={true}
            component={ Welcome }
          />
        </Scene>
      </Router>
    );
  }
}

export default App;

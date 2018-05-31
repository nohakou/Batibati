import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { appReducer }from './app/reducers/appReducer.js'
import SignUp from './app/components/Auth/authContainer';
import Welcome from './app/components/Auth/Welcome';
import singleTeam from './app/components/singleTeam/singleTeam';

const Scenes = Actions.create(
  <Scene key='main'>
    <Scene key='Signup' component={ SignUp }/>
    <Scene key='Welcome' initial={true} component={ Welcome }/>
    <Scene key='singleTeam' component={ singleTeam }/>
  </Scene>
);

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer, applyMiddleware(ReduxThunk,logger));
console.log(store);
console.log(ReduxThunk);

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

import * as actionTypes from './authActionTypes';
import {auth, database, storage } from './../config/firebase';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

export function createUser(team) {
  return function(dispatch) {
    return firebase.auth().createUserWithEmailAndPassword(team.emailAddress,team.passWord).then(
      resp => dispatch(signUp(team)),
    )
  }
}

export function signUp(team) {
  const { teamName, emailAddress, passWord } = team;
  return {
    type: actionTypes.SIGNUP,
    teamName:teamName,
    emailAddress:emailAddress,
    passWord:passWord
  };
}

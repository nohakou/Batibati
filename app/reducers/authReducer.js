import * as t from './../actions/authActionTypes';
import { AsyncStorage } from 'react-native';

let initialState = { isLoggedIn: false, user:null };

export default const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGGED_IN: {
      const user = action.data;

      AsyncStorage.multiSet([
        ['user', JSON.stringfy(user)]
      ]);

      return {...state, isLoggedIn: true, user:user };
    }
    case t.LOGGED_OUT: {
      let keys = ['user'];
      AsyncStorage.multiRemove(keys);

      return {...state, isLoggedIn: false, user:null };
    }

    default:
      return state;
  }
};

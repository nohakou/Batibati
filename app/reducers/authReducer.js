import * as actionTypes from './../actions/authActionTypes';

const initialState = {
    user : {
      teamName: '',
      emailAddress:'',
      passWord:''
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return Object.assign({},state,{
        user : {
          teamName:action.teamName,
          emailAddress:action.emailAddress,
          passWord:action.passWord
        }
      });

    default:
      return state;
  }
};

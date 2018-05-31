import * as actionTypes from './../actions/authActionTypes';

const initialState = {
  team : {
    teamName: '',
    emailAddress:'',
    passWord:''
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP: {
      return Object.assign({},state,
        {
          team: {
            teamName:action.teamName,
            emailAddress:action.emailAddress,
            passWord:action.passWord
        }
      }
    );
  }

    default:
      return state;
  }
};

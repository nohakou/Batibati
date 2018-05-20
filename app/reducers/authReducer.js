import * as authAction from './../actions/authAction';

const initialState = {
    user : {
      name: '',
      emailAddress:'',
      passWord:''
  }
}

const authReducer = (state = initialState, authAction) => {
  switch (authAction.type) {
    case CREATE_USER:
      return Object.assign({},state,{
        user : {
          name:action.name,
          emailAddress:action.emailAddress,
          passWord:action.passWord
        }
      });

    default:
      return state;
  }
};

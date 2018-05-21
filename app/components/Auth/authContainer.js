import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './../../actions/authAction';
import SignUp from './SignUp';

const mapStateToProps = (state) => {
  return {
      teamName:state.teamName,
      emailAddress:state.emailAddress,
      passWord:state.passWord
    }
  };

const mapDispatchToProps = (dispatch) => {
  return {
    onPress(teamName,emailAddress,passWord){
      dispatch(createUser(teamName,emailAddress,passWord));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './../../actions/authAction';
import SignUp from './SignUp';


const mapStateToProps = (state) => {
  return {
      teamName:state.user.teamName,
      emailAddress:state.email,
      passWord:state.password
    }
  };

const mapDispatchToProps = (dispatch) => {
  return {
    onPress(data){
      dispatch(createUser(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

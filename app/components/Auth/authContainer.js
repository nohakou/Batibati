import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from './../../actions/authAction.js';
import { SignUp } from './SignUp';

function mapDispatchToProps(dispatch) {
  return {
    onPress(teamName,emailAddress,passWord) {
      dispatch(createUser(teamName,emailAddress,passWord));
    }
  };
}

export default connect(null, mapDispatchToProps)(SignUp);

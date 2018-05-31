import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './../../actions/authAction';
import SignUp from './SignUp';

const mapStateToProps = (state) => {
  return state.team;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress(team){
      dispatch(createUser(team));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

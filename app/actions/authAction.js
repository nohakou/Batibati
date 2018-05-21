import * as actionTypes from './authActionTypes';

export function createUser(teamName,emailAddress,passWord) {
  return {
    type: actionTypes.CREATE_USER,
    teamName:teamName,
    emailAddress:emailAddress,
    passWord:passWord
  };
}

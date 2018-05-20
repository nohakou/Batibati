
const CREATE_USER = 'CREATE_USER';
export function createUser(name,emailAddress,passWord){
  return {
    type: ActionType.CREATE_USER ,
    name:name,
    emailAddress:emailAddress,
    passWord:passWord
  };
}

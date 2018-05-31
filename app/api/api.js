import {auth, database, storage } from './../config/firebase';
import fireabase from 'firebase';

export default function register(team) {
  const email = team.emailAddress;
  const password = team.passWord;
  fireabase.auth().createUserWithEmailAndPassword(email,password);
}

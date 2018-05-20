import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }
  handleOnPress(e){
    e.preventDefault();
    const teamName = this.refs.teamName.value
    const mailAddress = this.refs.mailAddress.value
    const passWord = this.refs.passWord.value
    this.props.onPress(teamName,mailAddress,passWord);
  }

  render() {
    return (
      <View>
        <View>
          <View>
            <Text>チーム名</Text>
            <TextInput ref="teamName"/>
          </View>
          <View>
            <Text>メールアドレス</Text>
            <TextInput ref="mailAddress"/>
          </View>
          <View>
            <Text>パスワード</Text>
            <TextInput ref="passWord"/>
          </View>
          <TouchableOpacity onPress={e => this.handleOnPress(e)}>
            <Text>参戦する</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

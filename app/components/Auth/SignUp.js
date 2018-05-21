import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class SignUp extends Component {
  state = {
    teamName: '',
    emailAddress: '',
    passWord: ''
  }

  render() {
    const { onPress } = this.props;
    return (
      <View>
        <View>
          <View>
            <Text>チーム名</Text>
            <TextInput onChangeText={(text) => this.setState({teamName: text})}/>
          </View>
          <View>
            <Text>メールアドレス</Text>
            <TextInput onChangeText={(text) => this.setState({emailAddress: text})}/>
          </View>
          <View>
            <Text>パスワード</Text>
            <TextInput onChangeText={(text) => this.setState({passWord: text})}/>
          </View>
          <TouchableOpacity onPress={() => { onPress(this.state.teamName,this.state.emailAddress,this.state.passWord);}}>
            <Text>参戦する</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class SignUp extends Component {
  state = {
    data: {
      teamName: '',
      email: '',
      password: ''
  }
}

  render() {
    const { onPress } = this.props;
    return (
      <View>
        <View>
          <View>
            <Text>チーム名</Text>
            <TextInput onChangeText={(text) => this.setState({data.teamName: text})}/>
          </View>
          <View>
            <Text>メールアドレス</Text>
            <TextInput onChangeText={(text) => this.setState({data.email: text})}/>
          </View>
          <View>
            <Text>パスワード</Text>
            <TextInput onChangeText={(text) => this.setState({data.password: text})}/>
          </View>
          <TouchableOpacity onPress={() => { onPress(this.state.data);}}>
            <Text>参戦する</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

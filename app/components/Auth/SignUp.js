import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class SignUp extends Component {
  state = {
    team : {
      teamName: '',
      emailAddress: '',
      passWord: ''
    }
  }
    
  render() {
    const { onPress } = this.props;
    return (
      <View>
        <View>
          <View>
            <Text>チーム名</Text>
            <TextInput onChangeText={(text) => this.setState({team: Object.assign({},this.state.team,{teamName:text})})}/>
          </View>
          <View>
            <Text>メールアドレス</Text>
            <TextInput onChangeText={(text) => this.setState({team: Object.assign({},this.state.team,{emailAddress:text})})}/>
          </View>
          <View>
            <Text>パスワード</Text>
            <TextInput onChangeText={(text) => this.setState({team: Object.assign({},this.state.team,{passWord:text})})}/>
          </View>
          <TouchableOpacity onPress={() => { onPress(this.state.team);}}>
            <Text>参戦する</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}

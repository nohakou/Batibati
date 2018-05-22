import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Image,TouchableOpacity } from 'react-native';

export default class TeamPage extends Component {
  render(){
    return(
      <View>
        <Image/>
        <Text>チーム名</Text>
        <Text>ランク</Text>
        <Text>活動場所</Text>
        <TouchableOpacity onPress={"#"} >
          <Text>スケジュールを登録</Text>
        </TouchableOpacity>
        <Text>スケジュール</Text>
      </View>
    );
  }
}

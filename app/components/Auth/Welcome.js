import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Welcome extends React.Component {
  render() {
    return(
      <View>
        <View>
          <Text>絶対に負けられない戦いが俺にもある！！</Text>
          <TouchableOpacity onPress={() => { Actions.Signup() }} >
            <Text>チーム登録</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;

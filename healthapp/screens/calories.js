import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Input } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CalorieScreen extends Component {
  render() {
    return (
      <View>
        <Input
          style={styles.formTextInput}
          label={'Food Item'}
          placeholder={'enter here'}
          // containerStyle={{ marginTop: RFValue(60) }}
          // onChangeText={(text) => this.getBooksFromApi(text)}
          // onClear={(text) => this.getBooksFromApi('')}
          // value={this.state.bookName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
  },
});

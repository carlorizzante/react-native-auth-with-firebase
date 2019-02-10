import React from 'react';
import { Text, TextInput, View } from 'react-native';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  text_label: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    // backgroundColor: 'rgba(255,100,155,0.2)'
  },
  text_input: {
    flex: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 18,
    lineHeight: 23,
    color: '#666',
    fontStyle: 'italic'
    // backgroundColor: 'rgba(100,255,255,0.2)'
  }
};

export const Input = ({ label, onChangeText, secureTextEntry, placeholder, value }) => (
  <View style={styles.root}>
    <Text
      style={styles.text_label}
    >{label}</Text>
    <TextInput
      style={styles.text_input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

export default Input;

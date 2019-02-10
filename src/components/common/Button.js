import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const styles = {
  root: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 5,
    padding: 6,
    paddingTop: 12,
    paddingBottom: 12
  },
  content: {
    alignSelf: 'center',
    color: '#0071ff',
    fontSize: 16,
    fontWeight: '600'
    // textAlign: 'center'
  }
}

export const Button = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.root}
    onPress={onPress}
  >
    <Text style={styles.content}>
      {children}
    </Text>
  </TouchableOpacity>
)

export default Button;

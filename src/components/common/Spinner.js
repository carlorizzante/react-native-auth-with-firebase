import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export const Spinner = ({ size }) => (
  <View style={styles.root}>
    <ActivityIndicator size={size}/>
  </View>
)

export default Spinner

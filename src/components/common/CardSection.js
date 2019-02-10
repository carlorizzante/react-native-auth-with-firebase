import React from 'react'
import { View } from 'react-native'

const styles = {
  root: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export const CardSection = ({ children, style }) => (
  <View style={{ ...styles.root, ...style }}>
    {children}
  </View>
)

export default CardSection

import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    elevation: 2,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.5)',
    borderBottomWidth: 2,
    backgroundColor: 'teal',
    paddingTop: 80,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
  }
};

export const Header = ({ children }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Header;

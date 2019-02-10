/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import { View } from 'react-native'
import { Header } from './components/common'

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    display: 'flex',
    // flex: 1,
    margin: 10,
  },
  welcome__content: {
    fontSize: 20,
    textAlign: 'center',
  },
  submit: {
    // flex: 1,
    padding: 10
  }
}

class App extends Component {
  state = {
    auth: {
      username: null,
      password: null,
      authenticated: false
    }
  }

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyD3milgY1C2Zel6-rlzYQlMvm8ZdfqM4lA',
      authDomain: 'react-native-auth-2019.firebaseapp.com',
      databaseURL: 'https://react-native-auth-2019.firebaseio.com',
      projectId: 'react-native-auth-2019',
      storageBucket: 'react-native-auth-2019.appspot.com',
      messagingSenderId: '333996719070'
    }
    firebase.initializeApp(config)
  }

  handleSubmit = () => console.log('Submit!')

  render() {
    return (
      <View style={styles.root}>
        <Header>Auth demo</Header>
        <LoginForm />
      </View>
    );
  }
}

export default App;

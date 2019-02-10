import React, { Component } from 'react'
import firebase from 'firebase'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'

const styles = {
  root: {},
  content: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  content__error: {
    color: 'red'
  },
  content__success: {
    color: 'green'
  }
}

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: '',
    message: '',
    buttonText: '',
    buttonTextActive: 'Sign in (or create new account)',
    buttonTextDisabled: 'Verifying your credential...'
  }

  componentDidMount() {
    const { buttonTextActive } = this.state
    this.setState({ buttonText: buttonTextActive })
  }

  handleChangeValue = name => value => {
    // TODO: Why this doesn't work?
    console.log(name, value);
    this.setState({ name: value })
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    const { buttonTextActive, buttonTextDisabled } = this.state;
    this.setState({
      loading: true,
      error: '',
      message: '',
      buttonText: buttonTextDisabled
    })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => this.setState({ message: 'User authenticated.' }))
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => this.setState({ message: 'User successfully created!' }))
        .catch(error => this.setState({ error: error.message }))
      )
      .finally(() => this.setState({
        loading: false,
        buttonText: buttonTextActive
      }))
  }

  render() {
    const { buttonText, email, error, loading, message, password } = this.state
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={email}
            placeholder="user@email.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            onChangeText={password => this.setState({ password })}
            value={password}
            placeholder="your password"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.handleSubmit}>
            {buttonText}
          </Button>
        </CardSection>

        <CardSection style={styles.content}>
          <Text>You can create a new account provinding a new email and password.</Text>
        </CardSection>

        {loading && <Spinner size='large' />}

        {
          message || error
          ? (
            <CardSection style={styles.content}>
              <Text style={styles.content__error}>{error}</Text>
              <Text style={styles.content__success}>{message}</Text>
            </CardSection>
          )
          : null
        }
      </Card>
    );
  }
}

export default LoginForm

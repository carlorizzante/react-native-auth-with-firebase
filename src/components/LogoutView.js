import React from 'react'
import firebase from 'firebase';
import { View } from 'react-native'
import { Button, Card, CardSection } from './common'

const LogoutView = () => {

  const handleLogout = () => firebase.auth().signOut()

  return (
    <Card>
      <CardSection>
        <Button onPress={handleLogout}>
          Logout
      </Button>
      </CardSection>
    </Card>

  )
}

export default LogoutView

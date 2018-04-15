import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button
}from 'react-native';

import {Actions} from "react-native-router-flux";

class Home extends React.Component
{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>
        <Text>WHAT DO YOU MEME</Text>
        </Text>
        <Button 
            onPress={() => {
                Actions.signin();
            }}
          title="Sign in"
          color="#841584"
        />
        <Button
            onPress={() => {
                Actions.signup();
            }}
          title="Sign up"
          color="#841584"
        />
        <Button 
          title="Play as guest"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontSize: 30,
    color: '#F1C40F',
    fontFamily: 'Arial',
    marginTop: -300,
    marginBottom: 50,
  },
});

export default Home;
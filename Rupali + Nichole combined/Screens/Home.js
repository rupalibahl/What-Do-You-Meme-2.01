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
        <Text>What Do You Meme</Text>
        </Text>
        <Button 
            onPress={() => {
                Actions.signin();
            }}
          title="Sign in"
          color="#FF0066"
        />
        <Button
            onPress={() => {
                Actions.signup();
            }}
          title="Sign up"
          color="#FF0066"
        />
        <Button 
          title="Play as guest"
          color="#FF0066"
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
      backgroundColor: '#2b2b2b',
      fontFamily:'AppleSDGothicNeo-Thin',
  },
  head: {
    fontSize: 30,
    color: '#00FFC8',
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginTop: -300,
    marginBottom: 50,
  },
});

export default Home;
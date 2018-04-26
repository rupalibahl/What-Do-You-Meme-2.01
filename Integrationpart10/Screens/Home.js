import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
    // Button
}from 'react-native';

import {Actions} from "react-native-router-flux";
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo';
import { Button } from 'react-native-elements';

class Home extends React.Component
{
  render() {
    return (
        <LinearGradient colors ={['#1556cb','#30cfd0']} style = {[styles.container]}>
        //{['#ff9a9e','#fadoc4']}
        //{['#FF512F','#DD2476']}
        //{['#a18cd1','#fbc2eb']}
      {/*<View style={styles.container}>*/}
        {/*<Text style={styles.head}>*/}
        {/*<Text>What Do You Meme</Text>*/}
        {/*</Text>*/}
            <Image
                source = {require('./WDYMTitle.png')}
                style={{width: 180, height: 80, marginBottom: 50}}
            />
        <Button 
            onPress={() => {
                Actions.signin();
            }}
          title="Sign in"
          color="white"
            titleStyle={{ fontWeight: "200"}}
            buttonStyle={{
                backgroundColor: "transparent",
                width: 200,
                height: 50,
                borderColor: "#dddddd",
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 30

            }}

        />
        <Button
            onPress={() => {
                Actions.signup();
            }}
          title="Sign up"
            color="white"
            titleStyle={{ fontWeight: "200"}}
            buttonStyle={{
                backgroundColor: "transparent",
                width: 200,
                height: 50,
                borderColor: "#dddddd",
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 30
            }}

        />
        <Button 
            onPress={() => {
                Actions.guest();
            }}
          title="Play as guest"
          color="white"
          titleStyle={{ fontWeight: "200"}}
          buttonStyle={{
              backgroundColor: "transparent",
              width: 200,
              height: 50,
              borderColor: "#dddddd",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 30

          }}
        />
      {/*</View>*/}
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
      backgroundColor: 'transparent',
      //backgroundColor: '#2b2b2b',
      //backgroundColor: {['#ff9a9e','#fadoc4']},
      fontFamily:'AppleSDGothicNeo-Thin',
  },
  head: {
      marginTop: 200,
      fontSize: 30,
    color: 'white',
    //fontFamily: 'Helvetica',
    marginTop: -300,
    marginBottom: 50,
      backgroundColor: 'transparent',

  },
});

export default Home;
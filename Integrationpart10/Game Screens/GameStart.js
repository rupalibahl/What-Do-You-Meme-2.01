import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Image,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo';
import { Button } from 'react-native-elements';
import {Actions} from "react-native-router-flux";


export default class GameStart extends Component {

  static navigationOptions = {
     title: 'GameStart',
  };

state = {
    score: 0,
    meme: '',
    showWaitingPlayers: false,
    username: this.props.username,
    players: '',
    player1: '',
    player2: '',
    playernum: '',
    servlet: 'startinggame',
    caption1: this.props.caption1,
    caption2: this.props.caption2,
    caption3: this.props.caption3,
    caption4: this.props.caption4

  }


    // receivePlayers = () => {
    //   fetch('http://localhost:8080/WDYM/Waiting?username=' + this.state.username )
    //     .then((res) =>res.json())
    //     .then((data) =>{
    //       Alert.alert(JSON.stringify(data));
    //       this.state.players = JSON.stringify(data);

    //     })
    // }

    retrieveMemes = () => {
    fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser + "&servlet=getcaptions")
             .then((res) => res.json())
            .then((data) => {
              
              Alert.alert(JSON.stringify(data));
              var temp = JSON.stringify(data).split(",")
              console.log(temp)
             
             //set player1 cards to index 0-3
              if(this.state.playernum == 1)
              {
                  this.state = {
                    caption1 : temp[0],
                    caption2 : temp[1],
                    caption3 : temp[2],
                    caption4 : temp[3],

                  };
              }
              //set player2 cards to index 4-7
              else 
              {

                this.state = {
                    caption1 : temp[4],
                    caption2 : temp[5],
                    caption3 : temp[6],
                    caption4 : temp[7]

                  };
              }               
              
              Actions.player({
                 caption1: this.state.caption1,
                 caption2: this.state.caption2,
                 caption3: this.state.caption3,
                 caption4: this.state.caption4,
                 playernum: this.state.playernum

              })

            })


  }


  determineRole = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser + "&servlet=" +this.state.servlet)
             .then((res) => res.json())
            .then((data) => {

                  Alert.alert(JSON.stringify(data));
                if ( JSON.stringify(data) == '"judge"') 
                {   
                    this.props.player1 = this.state.username;                 
                    destination = 'judge';
                    this.props.navigation.navigate(destination);
                  
                } 
                else if(JSON.stringify(data) == '"player1"')
                {
                    this.state.player2 = this.state.username;
                    this.state.playernum = '1';
                    this.retrieveMemes();

                }
                else if(JSON.stringify(data) == '"player2"')
                {
                    this.state.player3 = this.state.username;
                    this.state.playernum = '2';
                    this.retrieveMemes();

                }


               
              })

    }




  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    return (
        <LinearGradient colors ={['#e5b2ca','#7028e4']} style = {[styles.container]}>
        //<View style={styles.container}>
        <Text style={styles.title}>ID:ABC123</Text>
        <Text>Welcome {this.props.username}</Text>
        /<Text style = {styles.wait}>Waiting for other players...</Text>
        <Text style = {styles.join}> Players in this game: </Text>
        <Text></Text>
        <Text></Text>
        <Text>{this.state.player2}</Text>
        <Text></Text>
        <Text>{this.state.player3}</Text>
     <Button 
      title = "Start Game"
      buttonStyle={{
          backgroundColor: "transparent",
          width: 200,
          height: 50,
          borderColor: "#dddddd",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 30

      }}
      //style = {{fontSize:30, color: 'white',}}
             color = 'white'
      onPress = {() =>{
         this.determineRole();
      }}
    />

      //</View>
        </LinearGradient>
    );
  }
}

/*
  Styles for our tip calculator
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
      backgroundColor: 'transparent',
  },
  title: {
    fontSize: 30,
    //fontWeight: '700',
    textAlign: 'center',
    //marginBottom: 20,
    //marginLeft: 15,
      color: 'black',
      fontFamily: 'AppleSDGothicNeo-Bold',
  },
 join: {
    fontFamily: 'AppleSDGothicNeo-Regular',
     color: 'black',
     fontSize: 25,
 },
  cardTitle:{
    marginTop:30,
    marginBottom:30,
    fontSize: 25,
  },
  wait:{
      fontSize: 20,
      marginTop: 50,
      marginBottom: 50,
      color: 'black',
      fontFamily:'AppleSDGothicNeo-Regular',
  },

});

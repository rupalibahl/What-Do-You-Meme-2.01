import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Image,
  Alert
} from 'react-native';
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
    servlet: 'startinggame',
    caption1: this.props.caption1,
    caption2: this.props.caption2,
    caption3: this.props.caption3,
    caption4: this.props.caption4,
    caption5: this.props.caption5,
    caption6: this.props.caption6

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
              this.state = {
                caption1 : temp[0],
                caption2 : temp[1],
                caption3 : temp[2],
                caption4 : temp[3],
                caption5 : temp[4],
                caption6 : temp[5]

              };
               Actions.player({
                  caption1: this.state.caption1,
                   caption2: this.state.caption2,
                    caption3: this.state.caption3,
                     caption4: this.state.caption4,
                      caption5: this.state.caption5,
                       caption6: this.state.caption6

              })
              //this.props.caption1 = JSON.stringify(data).substring(45, 60);
             //var tempStringArray = JSON.stringify(data).split(',');
              //this.props.caption1 = tempStringArray[0];
              //if player 2, set caption1 - caption6 = to tempStringArray 0 to 3
              //else set them = to tempStringArray 7-12


            })


  }


 determineRole = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser + "&servlet=" +this.state.servlet)
             .then((res) => res.json())
            .then((data) => {

                if ( JSON.stringify(data) == '"judge"') {   
                    this.props.player1 = this.state.username;                 
                    destination = 'judge';
                    this.props.navigation.navigate(destination);
                    console.log("hi1");

                  
                } else if(JSON.stringify(data) == '"player"'){
                    if(this.state.player2 == ''){
                      this.state.player2 = this.state.username;
                    }
                    else{
                      this.state.player3 = this.state.username;
                    }

                    this.retrieveMemes();

                   // destination = 'player';
                    //this.props.navigation.navigate(destination);
                    //console.log("hi2");

                }
                    //destination = JSON.stringify(data); 
        //this.props.navigation.navigate(destination);
               
              })
        // Alert.alert('in determineRole');
        //            //this.retrieveMemes();
        //            this.splitString("one,two,three,four,five,six")

        //  //this.props.navigation.navigate('player');

    }







  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.title}>ID:ABC123</Text>
        <Text>Welcome {this.props.username}</Text>
        /<Text style = {styles.wait}>Waiting for other players...</Text>
        <Text style = {styles.join}> Players in this game: </Text>
        <Text></Text>
        <Text></Text>
        <Text>{this.state.player2}</Text>
        <Text></Text>
        <Text>{this.state.player3}</Text>
     /<Button 
      title = "Start Game"
      //style = {{fontSize:30, color: 'white',}}
             color = '#00FFC8'
      onPress = {() =>{
         this.determineRole();
      }}
    />

      </View>
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
      backgroundColor: '#2b2b2b',
  },
  title: {
    fontSize: 30,
    //fontWeight: '700',
    textAlign: 'center',
    //marginBottom: 20,
    //marginLeft: 15,
      color: '#708D91',
      fontFamily: 'AppleSDGothicNeo-Bold',
  },
 join: {
    fontFamily: 'AppleSDGothicNeo-Regular',
     color: 'white',
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
      color: '#FFB300',
      fontFamily:'AppleSDGothicNeo-Regular',
  },

});

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class GameStart extends Component {

  static navigationOptions = {
   	 title: 'GameStart',
  };
 
  state = {
    score: 0,
    meme: '',
    showWaitingPlayers: false,
    username: '',

  }

  determineRole = () => {
        // fetch('http://localhost:8080/WDYM/StartingGame?username=' + this.state.username )
        //     .then((res) => res.json())
        //     .then((data) => {

        //         if ( JSON.stringify(data) == '"validUsername"') {                    
        //             Actions.gamemenu();
                  
        //         } else {
        //             this.state.errorMessage = '"InvalidUsername"'

        //         }
        //     })

        //destination = JSON.stringify(data); 
        destination = 'player';
        this.props.navigation.navigate(destination);
        console.log("hi");
    }






  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.title}>ID:X2TYR</Text>
        /<Text style = {styles.wait}>Waiting for other players...</Text>
        <Text style = {styles.join}> Players in this game: </Text>

		 <Button 
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


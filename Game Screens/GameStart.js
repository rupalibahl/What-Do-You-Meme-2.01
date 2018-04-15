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
        destination = 'Player';
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
        <Text style={styles.title}>ID:ABC123</Text>
        /<Text style = {styles.wait}>Waiting for other players...</Text>
        <Text styld = {styles.join}> Players in this game: </Text>

		 <Button 
			title = "Start the Game"
			style = {{fontSize:30, color: 'black',}}
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
    paddingTop: 60
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'left',
    //marginBottom: 20,
    marginLeft: 15
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    alignSelf: 'center',

  },
  tipButton:{
    width: 40,
    backgroundColor:"#841584",
  },
  instruction: {
    fontSize: 18,
    fontWeight: '700',
    //marginTop: 50,
    marginLeft: 15,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 15,
    alignSelf: 'baseline'

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
  },

});


import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Image
} from 'react-native';
import {Actions} from "react-native-router-flux";


export default class Player extends Component {

	static navigationOptions = {
    title: 'player2',
  };
 
  state = {
    score: 0,
    meme: '',
    showWaitForMeme: true,
    chosencard:this.props.chosencard,

  }

  WaitJudgeToPick=() =>{
       fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&winner=1&servlet=judgePicked')
            .then((res) => res.json())
            .then((data) => {
                Alert.alert("in WaitJudgeToPick");
                 if (JSON.stringify(data) == "ready"){
                  Actions.End({
                    // chosencard: {this.state.chosencard}
                  })
                 }else{
                  //do nothing and wait
                 }
              })

  }

  componentDidMount(){
  Alert.alert('in compoenent did mount');
  this.WaitJudgeToPick();
}
  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    return ( 
    this.ShowMeme,
      <View style={styles.container}>
        <Text style={styles.title}>Player</Text>
         /<Text style={styles.cardTitle}>{(this.state.showWaitForMeme) ? ("Waiting For Judge to Choose") : (<Image source={require('./meme.jpg')} 
            style={{width: 350, height: 280, alignSelf:'center', resizeMode: Image.resizeMode.contain}}/>)}</Text>
    
       

        <Text style={styles.totalLabel}>Your Score: {this.state.score}</Text>
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
    //alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
      backgroundColor: '#2b2b2b',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'left',
    //marginBottom: 20,
    marginLeft: 15
  },
  tipButtonContainer: {
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
    backgroundColor:"#841584"
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
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 40,

  }
});



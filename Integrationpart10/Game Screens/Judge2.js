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


export default class Judge extends Component {

  static navigationOptions = {
   	 title: 'Judge',
  };
 
  state = {
    score: 0,
    meme: this.props.meme,
    showWaitingPlayers: false,
    winner: '',

  }


 sendWinner = (value) => {
        fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&servlet=result&winner=' + value)
            
            .then((res) => res.json())
            .then((data) => {
                //Alert.alert("in sendWinner");
                this.props.winner = JSON.stringify(data);
               Actions.End({
                    winner: this.props.winner,
                })
              })

      }

WaitPlayerToPick=() =>{
       fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&winner=1&servlet=playerPicked')
            .then((res) => res.json())
            .then((data) => {
                Alert.alert("in WaitPlayerToPick");
                 if (JSON.stringify(data) == "ready"){
                  //show the cards
                 }else{
                  //do nothing and wait
                 }
              })

  }

  componentDidMount(){
  Alert.alert('in compoenent did mount');
  //this.WaitPlayerToPick();
}

  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    Alert.alert(this.props.meme);
    return ( 

      <View style={styles.container}> 
       <Text style={styles.title}>Judge</Text>

      /  <Image source={{uri: this.props.meme}} 
            style={{width: 350, height: 300, alignSelf:'center', resizeMode: Image.resizeMode.contain}}/>


        <Text style={styles.instruction}>Please pick from the following cards:</Text>

        /<View style={styles.tipButtonContainer}>
          <Button 
            title="AAA" 
            style={styles.tipButton}
            onPress={() => {
              this.setState({
                winner: "AAA"
              })
              this.sendWinner('AAA');
             // this.props.navigation.navigate('End', {meme: "AAA"})

            }} 
          /> 

          <Button 
            title="BBB" 
            style={styles.tipButton}
            onPress={() => {
                this.setState({
                winner: "BBB"
              })
             this.sendWinner('BBB');

            }} 
          /> 
        </View>
       / <View style={styles.tipButtonContainer}>

          <Button 
            title="CCC" 
            style={styles.tipButton}
            onPress={() => {
             this.setState({
                winner: "CCC"
              })
              this.sendWinner('CCC');
             // this.props.navigation.navigate('End', {meme: "CCC"})

            }} 
          /> 

          <Button 
            title="DDD" 
            style={styles.tipButton}
            onPress={() => {
            this.setState({
                winner: "DDD"
              })
              this.sendWinner('DDD');

             // this.props.navigation.navigate('End', {meme: "DDD"})

            }} 
          /> 
        </View>
       / <View style={styles.tipButtonContainer}>

          <Button 
            title="EEE" 
            style={styles.tipButton}
            onPress={() => {
              this.setState({
                winner: "EEE"
              })
              this.sendWinner('EEE');

              //this.props.navigation.navigate('End', {meme: "EEE"})
            }} 
          /> 

          <Button 
            title="FFF" 
            style={styles.tipButton}
            onPress={() => {
             this.setState({
                winner: "FFF"
              })
              this.sendWinner('FFF');
              //this.props.navigation.navigate('End', {meme: "FFF"})
            }} 
          /> 
        </View>


        /<Text style={styles.totalLabel}>Your Score: {this.state.score}</Text>
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
    paddingTop: 60
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

  }
});


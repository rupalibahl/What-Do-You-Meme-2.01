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
    meme: '',
    showWaitingPlayers: false,
    score1: this.props.score1,
    score2: this.props.score2,               
    score3: this.props.score3,
    p1: this.props.p1,
    p2: this.props.p2,
    p3: this.props.p3,

  }

getMeme = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&servlet=getmeme')
            
            .then((res) => res.json())
            .then((data) => {
                //Alert.alert("in sendWinner");
                var tempMeme = JSON.stringify(data).replace("\"","");
                tempMeme = tempMeme.replace("\"","");
                tempMeme = "\'" + tempMeme + "\'"
                this.state.meme = tempMeme;
                Alert.alert(this.props.meme);
                this.props.navigation.navigate('judge2');
              })

      }

  fetchRanking=() =>{
        Alert.alert('in fetchRanking')
           fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&winner=1&servlet=getranking')
                .then((res) => res.json())
                .then((data) => {

                  var temp = JSON.stringify(data).split(',');

                  //var curr = "Nicole,10,Puneet,7,Rupali,6";
                  var temp = curr.split(",");
                  console.log(temp);

                  this.state ={

                      score1: temp[1],
                      p1: temp[0],
                      score2: temp[3],
                      p2: temp[2],
                      score3: temp[5],
                      p3: temp[4],
                  };

                  Actions.ranking({
                    score1: this.state.score1,
                    score2: this.state.score2,
                    score3: this.state.score3,
                    p1: this.state.p1,
                    p2: this.state.p2,
                    p3: this.state.p3,

                  })

                })

    }



  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.title}>Judge</Text>
           /<Button 
          title = "Your Meme"
          style = {styles.ButtonContainer}
          onPress = {() => {
            this.setState({
                showWaitingPlayers: true
              })

          }}
        />
        <Text style={{fontSize: 30, alignSelf :'center',}}>Or</Text>
         <Button 
          title = "Stack"
          style = {styles.ButtonContainer}
          
           onPress={() => {
             this.setState({
                 showWaitingPlayers: true
               })
              this.getMeme();
             
            }}
        /> 

        <Button 
          title = "Leave Game"
          style = {styles.ButtonContainer}
          
           onPress={() => {
            
              this.fetchRanking();
             
            }}
        /> 


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
  }
});


import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class End extends Component {

  static navigationOptions = {
   	 title: 'Judge',
  };
 
  state = {
    score: 0,
    meme: '',
    showWaitingPlayers: false

  }


  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {

      const { params } = this.props.navigation.state;

    return ( 
      <View style={styles.container}>
        <Text style = {styles.title}>Judge/Player</Text>
        /<Image source={require('./meme.jpg')} 
            style={{width: 350, height: 300, alignSelf:'center', resizeMode: Image.resizeMode.contain}}/>
    
        <Text style={styles.instruction}>Winner:</Text>
        <Text style = {styles.winnercaption}> {params.meme} </Text>

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

  },
  winnercaption:{
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'center'
  }
});
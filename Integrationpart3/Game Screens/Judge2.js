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

export default class Judge extends Component {

  static navigationOptions = {
   	 title: 'Judge',
  };
 
  state = {
    score: 0,
    meme: '',
    showWaitingPlayers: false

  }


 sendWinner = (value) => {
        fetch('http://localhost:8080/WDYM/Result?winner=' + value )
          .then((res) => res.json())
            .then((data) => {
              Alert.alert('yo');
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
      /  <Image source={require('./meme.jpg')} 
            style={{width: 350, height: 300, alignSelf:'center', resizeMode: Image.resizeMode.contain}}/>
    
        <Text style={styles.instruction}>Please pick from the following cards:</Text>

        /<View style={styles.tipButtonContainer}>
          <Button 
            title="AAA" 
            style={styles.tipButton}
            onPress={() => {
              this.setState({
                meme: "AAA"
              })
              this.sendWinner('AAA');
              this.props.navigation.navigate('End', {meme: "AAA"})

            }} 
          /> 

          <Button 
            title="BBB" 
            style={styles.tipButton}
            onPress={() => {
                this.setState({
                meme: "BBB"
              })
             this.props.navigation.navigate('End', {meme: "BBB"})


            }} 
          /> 
        </View>
       / <View style={styles.tipButtonContainer}>

          <Button 
            title="CCC" 
            style={styles.tipButton}
            onPress={() => {
             this.setState({
                meme: "CCC"
              })
              this.props.navigation.navigate('End', {meme: "CCC"})

            }} 
          /> 

          <Button 
            title="DDD" 
            style={styles.tipButton}
            onPress={() => {
            this.setState({
                meme: "DDD"
              })
              this.props.navigation.navigate('End', {meme: "DDD"})

            }} 
          /> 
        </View>
       / <View style={styles.tipButtonContainer}>

          <Button 
            title="EEE" 
            style={styles.tipButton}
            onPress={() => {
              this.setState({
                meme: "EEE"
              })
              this.props.navigation.navigate('End', {meme: "EEE"})
            }} 
          /> 

          <Button 
            title="FFF" 
            style={styles.tipButton}
            onPress={() => {
             this.setState({
                meme: "FFF"
              })
              this.props.navigation.navigate('End', {meme: "FFF"})
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


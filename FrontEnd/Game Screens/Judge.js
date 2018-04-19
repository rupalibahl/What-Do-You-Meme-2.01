import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Image
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


  /*
    Render function for React components. 
    App will be re-rendered when state or props changes
  */
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.title}>Judge</Text>
            /<Text style={styles.cardTitle}>{(this.state.showWaitingPlayers) ? ("Waiting for Other Players to Join...") 
            : ( 
            <View>		<Button 
        	title = "Your Meme"
        	style = {styles.ButtonContainer}
        	onPress = {() => {
        		this.setState({
                showWaitingPlayers: true
              })

        	}}
        />
        <Text style={{fontSize: 30, alignSelf :'center',}}>Or</Text>
        / <Button 
        	title = "Stack"
        	style = {styles.ButtonContainer}
        	onPress = {() => {
        		this.setState({
                showWaitingPlayers: true
              })

        	}}
        /> </View>
		)}</Text>

		 <Button 
			title = "Start the Game"
			style = {{fontSize:30, color: 'black',}}
			onPress = {() =>{
			 this.props.navigation.navigate('Judge2')
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
    marginLeft: 15,

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


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


export default class Player extends Component {

	static navigationOptions = {
    title: 'player',
  };
 
  state = {
    score: 0,
    meme: '',
    showWaitForMeme: true,
    chosencard: '',
    caption1: this.props.caption1,
    caption2: this.props.caption2,
    caption3: this.props.caption3,
    caption4: this.props.caption4,
    caption5: this.props.caption5,
    caption6: this.props.caption6

  }


ShowMeme=()=>{
 
   // setTimeout(function(){ this.setState({ showWaitForMeme: false}); }.bind(this), 2000);
   this.setState({ showWaitForMeme: false})
 
  }

SendPlayerCard = (value) => {
  Alert.alert(value);
    fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&servlet=playerCards&winner=1&card='+ value )
             .then((res) => res.json())
             .then((data) => {

                Alert.alert("in sendPlayerCard");
                this.props.chosencard = JSON.stringify(data);
               //this.props.temp = 'LALALA'
               Actions.player2({
                    chosencard: this.props.chosencard,
                })


             })

}

WaitMeme=() =>{
       fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&winner=1&servlet=getmeme')
            .then((res) => res.json())
            .then((data) => {
                Alert.alert("in WaitMeme");
                 if (JSON.stringify(data) == "ready"){
                  this.ShowMeme();
                 }else{
                  //do nothing and wait
                 }
              })

}

  componentDidMount(){
  //Alert.alert('player in compoenent did mount');
  Alert.alert(this.props.caption1)

  //this.WaitMeme();
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
         /<Text style={styles.cardTitle}>{(this.state.showWaitForMeme) ? ("Waiting For Meme...") : (<Image source={require('./meme.jpg')} 
            style={{width: 350, height: 280, alignSelf:'center', resizeMode: Image.resizeMode.contain}}/>)}</Text>
    
       / <Text style={styles.instruction}>Your Cards:</Text>

        /<View style={styles.tipButtonContainer}>
          <Button 
            // title="YES YOU ARE" 
            title = {this.state.caption1}
            style={styles.tipButton}
            onPress={() => {
              this.setState({
                meme: "YES YOU ARE",
              })
              this.SendPlayerCard(this.state.caption1);


            }} 
            // onPress={() => {
            //   this.setState({
            //     meme: "YES YOU ARE",
            //   })
            //   this.SendPlayerCard('YESYOUARE');


            // }} 
          /> 

          <Button 
            title={this.state.caption2} 
            style={styles.tipButton}
            onPress={() => {
                this.setState({
                meme: "DUH",
              })
               this.SendPlayerCard(this.state.caption2);

              //this.props.navigation.navigate('End', {meme: "DUH"})

            }} 
          /> 
        </View>
       / <View style={styles.tipButtonContainer}>

          <Button 
            title={this.state.caption3}
            style={styles.tipButton}
            onPress={() => {
             this.setState({
                meme: "Cewl bae",
              showWaitForMeme: !this.state.showWaitForMeme,
              })
               this.SendPlayerCard(this.state.caption3);

            }} 
          /> 

          <Button 
            title={this.state.caption4}
            style={styles.tipButton}
            onPress={() => {
            this.setState({
                meme: "You mad bro",
                showWaitForMeme: !this.state.showWaitForMeme,
              })
              this.SendPlayerCard(this.state.caption4);
              //this.props.navigation.navigate('End', {meme: "You mad bro"})

            }} 
          /> 
        </View>
       / <View style={styles.tipButtonContainer}>

          <Button 
            title={this.state.caption5}
            style={styles.tipButton}
            onPress={() => {
              this.setState({
                meme: "Hey Girl",
             showWaitForMeme: !this.state.showWaitForMeme,

              })
             this.SendPlayerCard(this.state.caption5);
             // this.props.navigation.navigate('End', {meme: "Hey Girl"})

            }} 
          /> 

          <Button 
            title={this.state.caption5}
            style={styles.tipButton}
            onPress={() => {
             this.setState({
                meme: "Nerd Alert",
             showWaitForMeme: !this.state.showWaitForMeme,
                
              })
              this.SendPlayerCard(this.state.caption6);
             // this.props.navigation.navigate('End', {meme: "Nerd Alert"})

            }} 
          /> 
        </View>

        /<Button 
        	title="GIMME MEME"
        	style = {{ fontSize:30}}
        	onPress ={ this.ShowMeme }

         />

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

import React from 'react';

import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Image,
  Alert,

}from 'react-native';
import {Actions} from "react-native-router-flux";

class gameMenu extends React.Component
{
 state = {

    };

    state = {
        username: this.props.username,
        players: '',
        servlet: 'waiting',

  }



     waitingPlayers = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser + "&servlet=" +this.state.servlet)
            
            .then((res) => res.json())
            .then((data) => {
                Alert.alert(JSON.stringify(data));
                this.props.players = JSON.stringify(data);
               Actions.gamestart({
                    username: this.props.username,
                    players: this.props.players,
                })
              })
                  

     }




    render() {
        return (
            <View style={styles.container}>
                <Button

                    onPress={() => {
                        {this.waitingPlayers()}
   
                    }}

                    //onPress={this.signinButton}
                    // onPress={() => {
                    //     Actions.gamestart({
                    //         username: this.props.username,

                    //     })

                        
                    // }}
                    title="Start a game"
                    color="#B0FF05"
                />
                <Button
                    onPress={()=> {
                        Actions.joingame();
                    }}
                    title="Join a game"
                    color="#B0FF05"
                />
                <Button
                    title="Your memes"
                    color="#B0FF05"
                />
                <Button
                    title="Upload memes"
                    color='#708D91'
                    //fontSize= '10',
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2b2b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontSize: 30,
        color: '#f7c66d',
        fontFamily: 'Arial',
        marginTop: -300,
        marginBottom: 50,
    },
    welcome: {
        // position: 'absolute',
        // justifyContent: 'left',
        // alignItems: 'left',

    }
});

export default gameMenu;
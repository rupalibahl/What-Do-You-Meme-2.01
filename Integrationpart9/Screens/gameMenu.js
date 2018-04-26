import React from 'react';

import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Image,
  Alert,

}from 'react-native';
import {Actions} from "react-native-router-flux";
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';



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
        Alert.alert("hello?")
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
            <LinearGradient colors ={['#2db48a','#5182a0']} style = {[styles.container]}>
            //<View style={styles.container}>
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
                    color="white"
                    buttonStyle={{
                        backgroundColor: "transparent",
                        width: 200,
                        height: 50,
                        borderColor: "white",
                        borderWidth: 0.5,
                        borderRadius: 5,
                        marginBottom: 30,
                        fontSize: 50,

                    }}                />
                <Button
                    onPress={()=> {
                        Actions.joingame();
                    }}
                    title="Join a game"
                    color="white"
                    buttonStyle={{
                        backgroundColor: "transparent",
                        width: 200,
                        height: 50,
                        borderColor: "white",
                        borderWidth: 0.5,
                        borderRadius: 5,
                        marginBottom: 30,
                        fontSize: 50,

                    }}
                />
                <Button
                    title="Upload Caption"
                    color="white"
                    buttonStyle={{
                        backgroundColor: "transparent",
                        width: 200,
                        height: 50,
                        borderColor: "white",
                        borderWidth: 0.5,
                        borderRadius: 5,
                        marginBottom: 30,
                        fontSize: 50,

                    }}                />
                <Button
                    title="Upload memes"
                    color="white"
                    buttonStyle={{
                        backgroundColor: "transparent",
                        width: 200,
                        height: 50,
                        borderColor: "white",
                        borderWidth: 0.5,
                        borderRadius: 5,
                        marginBottom: 30,
                        fontSize: 50,
                        // opacity: 0.2,
                        // backgroundOpacity: 0.4,
                    }}                    //fontSize= '10',
                />
           // </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
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
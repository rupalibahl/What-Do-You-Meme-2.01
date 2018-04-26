import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    AppRegistry,
    Alert,
}from 'react-native';
import {Actions} from "react-native-router-flux";
import { LinearGradient } from 'expo';


class Signup extends React.Component
{
    state = {
        username: '',
        password: '',
        newUser: 'yes',
    };


    checkUsername = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser + "&servlet=signin")
            .then((res) => res.json())
            .then((data) => {

                if (JSON.stringify(data) =='"Added"') {
                         Actions.gamemenu({
                            username: this.state.username,
                            password: this.state.password,
                        });                
                     } 
                else if(JSON.stringify(data) == '"UsernameTaken"') {
                    this.state.errorMessage = '"Username Taken"'
                }
                // data contains json object
            })
    }


    render() {
        return (
            <LinearGradient colors ={['#FF512F','#DD2476']} style = {[styles.container]}>
            //<View style={styles.container}>
                <Text>{this.props.username}</Text>
                <Text style={styles.title}>

                    <Text>Username:
                    </Text>
                </Text>

                <TextInput
                    style = {styles.nameInput}
                    placeholder=' Jeffrey Miller'
                    onChangeText={(text) => {
                        this.setState({
                            username:text,
                        });
                    }}
                    value={this.state.username}
                />
                <Text style={styles.title}>
                    <Text>Password:
                    </Text>
                </Text>

                <TextInput
                    style = {styles.nameInput}
                    secureTextEntry={true}
                    placeholder=' password'
                    onChangeText={(text) => {
                        this.setState({
                            password:text,
                        });
                    }}
                    value={this.state.password}
                />

                <Button
                    onPress={() => {
                        {this.checkUsername()}
                        //this.props.navigation.navigate('judge');


                    }}
                    title="Sign up"
                    color="white"
                />
            //</View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    //backgroundGradient: 'vertical',
    // backgroundGradientTop: '#333333',
    // backgroundGradientBottom: '#666666',

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'AppleSDGothicNeo-Regular',
    },
    nameInput: {
        height: 40,
        borderWidth: 0.5,
        borderRadius: 3,
        borderColor: 'white',
        margin: 20,
        width: 200,
        color:"white",
    }
});

export default Signup;
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Alert,
} from 'react-native';
import {Actions} from "react-native-router-flux";
import { LinearGradient } from 'expo';


class Signin extends React.Component {
    state = {
        username: '',
        password: '',
        newUser: 'no',
        servlet: 'signin',
    };

    checkUsername = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser + "&servlet=" +this.state.servlet)
            .then((res) => res.json())
            .then((data) => {

                if (JSON.stringify(data) =='"validUsername"') {
                         Actions.gamemenu({
                            username: this.state.username,
                        });                
                     } else if(JSON.stringify(data) == '"InvalidUsername"') {
                    this.state.errorMessage = '"Invalid username"'
                }
                // data contains json object
            })
    }

    render() {
        return (
            <LinearGradient colors ={['#FF512F','#DD2476']} style = {[styles.container]}>
            //<View style={styles.container}>
                <Text style={styles.title}>
                    <Text>Username:
                    </Text>
                </Text>

                <TextInput
                    style={styles.nameInput}
                    placeholder=' Jeffrey Miller'
                    onChangeText={(text) => {
                        this.setState({
                            username: text,
                        });
                    }}
                    value={this.state.username}
                />
                <Text style={styles.title}>
                    <Text>Password:
                    </Text>
                </Text>

                <TextInput
                    style={styles.nameInput}
                    secureTextEntry={true}
                    placeholder=' password'
                    onChangeText={(text) => {
                        this.setState({
                            password: text,
                        });
                    }}
                    value={this.state.password}
                />

                <Button
                    onPress={() => {
                        {this.checkUsername()}
   
                    }}
                    title="Sign-in"
                    color="white"
                />
            //</View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
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
        borderColor: '#fcffff',
        borderRadius: 3,
        margin: 20,
        width: 200,
        color:"white",
    }
});

export default Signin;
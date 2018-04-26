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
        username: 'guest',
        password: '',
        newUser: 'no',
        servlet: 'signin',
    };

    checkUsername = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser + "&servlet=" +this.state.servlet)
            .then((res) => res.json())
            .then((data) => {

                         Actions.gamemenu({
                            username: this.state.username,
                        });                

                // data contains json object
            })
    }

    render() {
        return (
            <LinearGradient colors ={['#FF512F','#DD2476']} style = {[styles.container]}>
            //<View style={styles.container}>
                <Text style={styles.title}>
                    <Text>Are you sure you want to continue without logging in?
                    </Text>
                </Text>




                <Button
                    onPress={() => {
                        {this.checkUsername()}
   
                    }}
                    title="PLAY AS GUEST"
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
        alignItems: 'center',
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
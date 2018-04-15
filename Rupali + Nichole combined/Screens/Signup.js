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


class Signup extends React.Component
{
    state = {
        username: '',
        password: '',
        newUser: 'yes',
    };


    checkUsername = () => {
        fetch('http://localhost:8080/WDYM/Signin?username=' + this.state.username + "&password=" + this.state.password + "&newUser=" + this.state.newUser)
            .then((res) => res.json())
            .then((data) => {

                if (JSON.stringify(data) =='"Added"') {
                         Actions.gamemenu({
                            username: this.state.username,
                            password: this.state.password,
                        });                
                     } else if(JSON.stringify(data) == '"UsernameTaken"') {
                    this.state.errorMessage = '"Username Taken"'
                }
                // data contains json object
            })
    }


    render() {
        return (

            <View style={styles.container}>
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
                    }}
                    title="Sign up"
                    color="white"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //backgroundGradient: 'vertical',
    // backgroundGradientTop: '#333333',
    // backgroundGradientBottom: '#666666',

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2b2b2b',
    },
    title: {
        fontSize: 20,
        color: '#FFB300',
        fontFamily: 'AppleSDGothicNeo-Regular',
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        width: 200,
        color:"white",
    }
});

export default Signup;
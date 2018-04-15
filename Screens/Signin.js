import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
} from 'react-native';
import {Actions} from "react-native-router-flux";

class Signin extends React.Component {
    state = {
        username: '',
        password: '',
    };

    checkUsername = () => {
        fetch('http://localhost:8080/signin?username=' + this.state.username + "&password=" + this.state.password)
            .then((res) => res.json())
            .then((data) => {
                // data = {"message":"validUsername"}
                if (data.message = "validUsername") {
                    Alert.alert("yo");
                } else {
                    this.state.errorMessage = "Invalid username"
                    Alert.alert("no");
                }
                // data contains json object
            })
    }

    render() {
        return (
            <View style={styles.container}>
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
                    placeholder=' password'
                    onChangeText={(text) => {
                        this.setState({
                            password: text,
                        });
                    }}
                    value={this.state.password}
                />

                <Button
                    onPress={this.checkUsername()}
                    title="Sign in"
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // title: {
    //     fontSize: 30,
    //     color: '#F1C40F',
    //     fontFamily: 'Arial',
    //     marginTop: -300,
    //     marginBottom: 10,
    // },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        width: 200,
    }
});

export default Signin;
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
} from 'react-native';
import {Actions} from "react-native-router-flux";

class joinGame extends React.Component {
    state = {
        ID: '',
    };

    checkCode = () => {
        fetch('http://localhost:8080/signin?username=' + this.state.username + "&password=" + this.state.password)
            .then((res) => res.json())
            .then((data) => {
                // data = {"message":"validUsername"}
                if (JSON.stringify(data) == '"validCode"') {
                    //Alert.alert("yo");
                    Actions.gamemenu({
                        username: this.state.username,
                        password: this.state.password,
                    });
                } else {
                    this.state.errorMessage = '"Invalid username"';
                    Alert.alert("no");
                }
                // data contains json object
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    <Text>Enter Game ID:
                    </Text>
                </Text>

                <TextInput
                    style={styles.nameInput}
                    placeholder=' Jeffrey Miller'
                    onChangeText={(text) => {
                        this.setState({
                            ID: text,
                        });
                    }}
                    value={this.state.username}
                />

                <Button
                    onPress={this.checkCode()}
                    // onPress={() => {
                    //     Actions.gamemenu({
                    //         username: this.state.username,
                    //         password: this.state.password,
                    //     });
                    //
                    // }}
                    title="Go"
                    color="white"
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
        //backgroundColor: '#ffe066',
    },
    title: {
        fontSize: 20,
        color: '#ff8185',
        fontFamily: 'Arial',
        marginTop: -300,
        marginBottom: 10,
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: '#8ec7ff',
        margin: 20,
        width: 200,
        color: "white",
    }
});

export default joinGame;
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
}from 'react-native';
import {Actions} from "react-native-router-flux";


class Signup extends React.Component
{
    state = {
        username: '',
        password: '',
    };
    render() {
        return (
            <View style={styles.container}>
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
                        Actions.gamemenu();
                    }}
                    title="Sign up"
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
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        width: 200,
    }
});

export default Signup;
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

class joinGame extends React.Component {
    state = {
        ID: '',
        errorMessage: '',
    };

    checkCode = () => {

        if(this.state.ID == 'X2TYR')
        {
            //Alert.alert(this.state.ID)
            Actions.gamestart();
        }
        else
        {
            this.state.errorMessage = 'Game not found. Please try another code.';
            Alert.alert(this.state.errorMessage);
        }

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
                    placeholder=' abc123'
                    onChangeText={(text) => {
                        this.setState({
                            ID: text,
                        });
                    }}
                    value={this.state.ID}
                />

                <Button
                    onPress={() => this.checkCode()}
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
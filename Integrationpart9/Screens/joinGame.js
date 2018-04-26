import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert
} from 'react-native';
import {Actions} from "react-native-router-flux";
import { LinearGradient } from 'expo';

class joinGame extends React.Component {
    state = {
        ID: '',
    };

    checkCode = () =>
    {
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
            <LinearGradient colors ={['#c471f5','#fa71cd']} style = {[styles.container]}>
            //<View style={styles.container}>
                <Text style={styles.title}>
                    <Text>Enter Game ID:
                    </Text>
                </Text>

                <TextInput
                    style={styles.nameInput}
                    placeholder=' ABC123'
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
        //backgroundColor: '#ffe066',
    },
    title: {
        fontSize: 20,
        color: 'white',
        //fontFamily: 'Arial',
        // marginTop: -300,
        // marginBottom: 10,
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

export default joinGame;
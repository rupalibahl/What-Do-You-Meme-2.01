import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button
}from 'react-native';
import {Actions} from "react-native-router-flux";

class gameMenu extends React.Component
{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.head}>
                    <Text>WHAT DO YOU MEME</Text>
                </Text>
                <Button
                    //onPress={this.signinButton}
                    onPress={() => {
                        Actions.signin();
                    }}
                    title="Start a game"
                    color="#841584"
                />
                <Button
                    title="Join a game"
                    color="#841584"
                />
                <Button
                    title="Your memes"
                    color="#841584"
                />
                <Button
                    title="Uplaod memes"
                    color='black'
                    //fontSize= '10',
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
    head: {
        fontSize: 30,
        color: '#F1C40F',
        fontFamily: 'Arial',
        marginTop: -300,
        marginBottom: 50,
    },
});

export default gameMenu;
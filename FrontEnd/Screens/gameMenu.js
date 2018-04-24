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
                <Button
                    //onPress={this.signinButton}
                    onPress={() => {
                        Actions.gamestart();
                    }}
                    title="Start a game"
                    color="#B0FF05"
                />
                <Button
                    onPress={()=> {
                        Actions.joingame();
                    }}
                    title="Join a game"
                    color="#B0FF05"
                />
                <Button
                    title="Your memes"
                    color="#B0FF05"
                />
                <Button
                    onPress={() => {
                        Actions.uploadimage();
                    }}
                    title="Upload memes"
                    color='#708D91'
                    //fontSize= '10',
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
    },
    head: {
        fontSize: 30,
        color: '#f7c66d',
        fontFamily: 'Arial',
        marginTop: -300,
        marginBottom: 50,
    },
    welcome: {
        // position: 'absolute',
        // justifyContent: 'left',
        // alignItems: 'left',

    }
});

export default gameMenu;
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    Alert
} from 'react-native';

export default class Ranking extends Component {

    static navigationOptions = {
        title: 'Ranking',
    };

    state = {
        score: 0,
        meme: '',
        showWaitingPlayers: false,
        username: '',
        score1: this.props.score1,
        score2: this.props.score2,
        score3: this.props.score3,
        p1: this.props.p1,
        p2: this.props.p2,
        p3: this.props.p3,

    }

    fetchRanking=() =>{
        Alert.alert('in fetchRanking')
           fetch('http://localhost:8080/WDYM/Signin?username=1&password=1&newUser=1&winner=1&servlet=getRanking')
                .then((res) => res.json())
                .then((data) => {


                  })

    }
    
    componentDidMount(){
        //Alert.alert('in compoenent did mount')
        //this.fetchRanking()
        //console.log(this.state.score1)
        Alert.alert(this.state.score)
      }

    /*
      Render function for React components.
      App will be re-rendered when state or props changes
    */
    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.title}>Ranking</Text>*/}
                /<Text style = {styles.wait}>Ranking</Text>
                <Text style = {styles.join}>1. {this.state.p1}: {this.state.score1} </Text>
                <Text style = {styles.join}>2. {this.state.p2}: {this.state.score2} </Text>
                <Text style = {styles.join}>3. {this.state.p3}: {this.state.score3}</Text>


            </View>
        );
    }
}

/*
  Styles for our tip calculator
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 60,
        backgroundColor: '#2b2b2b',
    },
    title: {
        fontSize: 30,
        //fontWeight: '700',
        textAlign: 'center',
        //marginBottom: 20,
        //marginLeft: 15,
        color: '#708D91',
        fontFamily: 'AppleSDGothicNeo-Bold',
    },
    join: {
        fontFamily: 'AppleSDGothicNeo-Regular',
        color: 'white',
        fontSize: 25,
    },
    cardTitle:{
        marginTop:30,
        marginBottom:30,
        fontSize: 25,
    },
    wait:{
        fontSize: 50,
        marginTop: 50,
        marginBottom: 50,
        color: '#FFB300',
        fontFamily:'AppleSDGothicNeo-Regular',
    },

});
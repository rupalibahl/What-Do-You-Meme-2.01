import React from 'react';

import Home from './Screens/Home';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import gameMenu from './Screens/gameMenu';
import joinGame from './Screens/joinGame';
import UploadImage from './Screens/UploadImage';
import Ranking from './Screens/Ranking'

import End from './Game Screens/End';
import GameStart from './Game Screens/GameStart';
import Judge from './Game Screens/Judge';
import Judge2 from './Game Screens/Judge2';
import Player from './Game Screens/Player';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

import {
    Platform
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';

class App extends React.Component
{
    render(){
        return(
            <Router>
                <Scene key='root'>
                    <Scene key='home' component={Home} title = 'Home'/>
                    <Scene key='signin' component={Signin} title = 'Sign in'/>
                    <Scene key='signup' component={Signup} title = 'Sign up'/>
                    <Scene key='gamemenu' component={gameMenu} title = 'Game Menu'/>
                    <Scene key='joingame' component={joinGame} title = 'Join Game'/>
                    <Scene key='gamestart' component={GameStart} title = 'Game Start'/>
                    <Scene key='judge' component={Judge} title = 'Judge'/>
                    <Scene key='judge2' component={Judge2} title = 'Judge2'/>
                    <Scene key='player' component={Player} title = 'Player'/>
                    <Scene key='End' component={End} title = 'End'/>
                    <Scene key='uploadimage' component={UploadImage} title = 'Upload Image'/>
                    <Scene key='ranking' component={Ranking} title = 'Ranking'/>
                </Scene>
            </Router>
        )
    }
}

export default App;
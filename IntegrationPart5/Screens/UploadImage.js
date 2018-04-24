import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';

class UploadImage extends React.Component
{
    getSelectedImages(image)
    {
        if(image[0])
        {
            alert(image[0].uri);
        }

    }

    render() {
        return (
            <CameraRollPicker callback={this.getSelectedImages}/>
        );
    }
}

export default UploadImage;

/**
 * Created by W.J on 2018/4/5.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import {styles} from '../style/style'


export default class Splash extends Component<Props> {
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('Drawer');
        },1500)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../image/splash.jpg")}>
                </Image>
            </View>

        );
    }
}
/**
 * Created by W.J on 2018/4/4.
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainView from './view/MainView'

export default Router = StackNavigator({
    Mian: {
        screen: MainView
    }
})


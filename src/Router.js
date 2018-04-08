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
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import MainView from './view/MainView'
import SideMenu from './view/SideMenu'

const Drawer = DrawerNavigator({
    MainView: {
        screen: MainView,
        navigationOptions:{
            header:null
        }
    }
}, {
    contentComponent: SideMenu
})
export default Router = StackNavigator({
    Home: {
        screen: Drawer,
        navigationOptions:{
            header:null
        }
    }
})

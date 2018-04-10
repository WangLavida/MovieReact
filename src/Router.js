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
import {StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import MainView from './view/MainView'
import SideMenu from './view/SideMenu'
import MovieView from './view/MovieView'
import ToolsView from './view/ToolsView'
import AboutView from './view/AboutView'
import TabBarItem from './componet/TabBarItem'
import Splash from './view/Splash'

const Tab = TabNavigator({
    Movie: {
        screen: MovieView,
        navigationOptions: ({navigation}) => ({
                tabBarLabel: "电影",
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("./image/movie_nor.png")}
                        selectedImage={require("./image/movie_sel.png")}
                    />
                )
            }
        )
    },
    Tools: {
        screen: ToolsView,
        navigationOptions: ({navigation}) => ({
                title:"工具",
                tabBarLabel: "工具",
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("./image/tool_nor.png")}
                        selectedImage={require("./image/tool_sel.png")}
                    />
                )
            }
        )
    },
    About: {
        screen: AboutView,
        navigationOptions: ({navigation}) => ({
                title:"关于",
                tabBarLabel: "关于",
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("./image/about_nor.png")}
                        selectedImage={require("./image/about_sel.png")}
                    />
                )
            }
        )
    }
}, {
    initialRouteName: 'Movie',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        // activeTintColor: color.primary,
        // inactiveTintColor: color.gray,
        // style: {backgroundColor: '#ffffff'},
    },
})
const Stack = StackNavigator({
    Tab: {
        screen: Tab,
    }
})
export default Drawer = DrawerNavigator({
    Splash: {
        screen: Splash,
    },
    Drawer: {
        screen: Stack,
    }
}, {
    initialRouteName: 'Splash',
    contentComponent: SideMenu
})


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
import NewsView from './view/NewsView'
import TabBarItem from './componet/TabBarItem'
import Splash from './view/Splash'
import color from './style/color'

const Tab = TabNavigator({
    Movie: {
        screen: MovieView,
        navigationOptions: ({navigation}) => ({
                tabBarLabel: "电影",
                header: null,
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
    News: {
        screen: NewsView,
        navigationOptions: ({navigation}) => ({
                title: "新闻",
                header: null,
                tabBarLabel: "新闻",
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require("./image/news_nor.png")}
                        selectedImage={require("./image/news_sel.png")}
                    />
                )
            }
        )
    },
    // Tools: {
    //     screen: ToolsView,
    //     navigationOptions: ({navigation}) => ({
    //             title: "工具",
    //             tabBarLabel: "工具",
    //             tabBarIcon: ({focused, tintColor}) => (
    //                 <TabBarItem
    //                     tintColor={tintColor}
    //                     focused={focused}
    //                     normalImage={require("./image/tool_nor.png")}
    //                     selectedImage={require("./image/tool_sel.png")}
    //                 />
    //             )
    //         }
    //     )
    // },
    About: {
        screen: AboutView,
        navigationOptions: ({navigation}) => ({
                title: "关于",
                header: null,
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
        activeTintColor: color.colorPrimary,
        inactiveTintColor: color.dividerText,
        style: {backgroundColor: '#ffffff'},
    },
})
const Stack = StackNavigator({
    Tab: {
        screen: Tab,
    }
})
const Drawer = DrawerNavigator({
    Drawer: {
        screen: Stack,
    }
}, {
    initialRouteName: 'Drawer',
    contentComponent: SideMenu
})
export default Start = StackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    },
    DrawerMain: {
        screen: Drawer,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'Splash',
})


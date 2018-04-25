/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    WebView
} from 'react-native';
import color from "../style/color";
import NavigationItem from '../componet/NavigationItem'

export default class AboutView extends Component<Props> {
    static navigationOptions = ({navigation, props}) => ({
            headerTitle: '关于',
            headerTitleStyle: {
                color: color.colorWhite,
                alignSelf: 'center'
            },
            headerStyle: {backgroundColor: color.colorPrimary},
            headerLeft: (
                <NavigationItem
                    icon={require("../image/menu.png")}
                    onPress={() => {
                        navigation.navigate('DrawerToggle');
                    }}
                />
            ),
        }
    )

    render() {
        return (
            <View style={{flex: 1}}>
                <WebView
                    style={{flex: 1}}
                    source={{uri: "https://github.com/WangLavida/MovieReact", method: 'GET'}}></WebView>
            </View>
        )
    }
}
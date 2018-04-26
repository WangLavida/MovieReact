/**
 * Created by W.J on 2018/4/5.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image, StyleSheet
} from 'react-native';
import color from "../style/color"
import MenuItem from "../componet/MenuItem"
import {
    DrawerNavigator,
    DrawerItems,
} from 'react-navigation';

var navigation = null;
export default class SideMenu extends Component {
    constructor(props) {
        super(props);

        navigation = this.props.navigation;
    }

    homeClick() {
        navigation.navigate('DrawerClose');
    }

    themeClick() {
        console.log("theme");
    }

    render() {
        return (
            <View>
                <View style={styles.top_view}>
                    <Image style={styles.top_image}
                           source={require("../image/user_head.jpg")}></Image>
                    <Text style={styles.top_text}>一曲肝肠断</Text>
                </View>
                <MenuItem title="首页" icon={require("../image/home.png")} itemClick={this.homeClick}/>
                <MenuItem title="主题" icon={require("../image/theme.png")} itemClick={this.themeClick}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    top_view: {
        height: 200,
        backgroundColor: color.colorPrimary,
        alignItems: 'center',
        justifyContent: "center"
    },
    top_image: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    top_text: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.colorWhite,
    }
})
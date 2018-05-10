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
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {
    DrawerNavigator,
    DrawerItems,
} from 'react-navigation';
import * as types from '../action/actionTypes'
import * as themeAction from '../action/themeActions'

var navigation = null;

class SideMenu extends Component {
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        this.themeClick = this.themeClick.bind(this);
    }

    homeClick() {
        navigation.navigate('DrawerClose');
    }

    themeClick() {
        console.log("theme");
        if(this.props.themeColor == color.colorPrimary){
            this.props.changeTheme(color.colorPrimary1);
        }else{
            this.props.changeTheme(color.colorPrimary);
        }

    }

    render() {
        const {themeColor,homeIcon,themeIcon} = this.props;
        return (
            <View>
                <View style={[styles.top_view, {backgroundColor: themeColor}]}>
                    <Image style={styles.top_image}
                           source={require("../image/user_head.jpg")}></Image>
                    <Text style={styles.top_text}>小怪兽</Text>
                </View>
                <MenuItem title="首页" icon={homeIcon} itemClick={this.homeClick}/>
                <MenuItem title="主题" icon={themeIcon} itemClick={this.themeClick}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    top_view: {
        height: 200,
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
const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor,
    homeIcon:state.theme.homeIcon,
    themeIcon:state.theme.themeIcon
})

const mapDispatchToProps = (dispatch) => ({
    changeTheme: color => dispatch(themeAction.changeTheme(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
/**
 * Created by W.J on 2018/5/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import color from "../style/color"

class HeadBar extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {themeColor} = this.props;
        return (
            <View style={{
                height: 50,
                flexDirection: 'row',
                padding: 10,
                backgroundColor: themeColor,
                alignItems: "center"
            }}>
                <TouchableOpacity onPress={() => this.props.leftClick()}>
                    <Image source={require("../image/menu.png")} style={{height: 35, width: 35}}></Image>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    alignSelf: "center",
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: color.colorWhite,
                    }}>{this.props.title}</Text>
                </View>
                <View style={{width: 35}}></View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})
export default connect(mapStateToProps)(HeadBar)
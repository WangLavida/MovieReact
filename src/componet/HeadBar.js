/**
 * Created by W.J on 2018/5/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
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
            <View style={{flexDirection: 'row', padding: 10, backgroundColor:themeColor}}>
                <TouchableOpacity onPress={() => this.props.leftClick()}>
                    <Image source={require("../image/menu.png")} style={{height: 35, width:35}}></Image>
                </TouchableOpacity>
                <Text style={{fontSize: 22, color:color.colorWhite, justifyContent: "center"}}>{this.props.title}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})
export default connect(mapStateToProps)(HeadBar)
/**
 * Created by W.J on 2018/4/11.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import color from "../style/color";

export default class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.view} onPress={() => this.props.itemClick()}>
                <Image source={this.props.icon}></Image>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = {
    view: {
        flexDirection: 'row', marginLeft: 20, marginTop: 20, alignItems: 'center'
    },
    text: {
        marginLeft: 10, color: color.colorPrimary, fontSize: 15
    }
}
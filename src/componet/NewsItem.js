/**
 * Created by W.J on 2018/4/24.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import color from "../style/color";

export default class SellItem extends Component {
    constructor(props) {
        super();
    }

    render() {
        let item = this.props.item;
        return (
            <TouchableHighlight activeOpacity={1}
                                underlayColor={color.colorTransparent}>
                <Text>{item.content}</Text>
            </TouchableHighlight>

        )
    }
}
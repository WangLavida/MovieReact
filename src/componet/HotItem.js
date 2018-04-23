/**
 * Created by W.J on 2018/4/18.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import color from '../style/color'

export default class HotItem extends Component<Props> {
    constructor(props) {
        super();
    }

    render() {
        let item = this.props.item;
        console.log(item.img);
        return (
            <View style={{ backgroundColor:'white'}}>
                <TouchableHighlight onPress={() => this.props.onPress(item)} activeOpacity={1}
                                    underlayColor={color.colorTransparent}>
                    <Image source={{uri: item.img}} style={{height: 160, width: 100}}></Image>
                </TouchableHighlight>
            </View>
        )
    }
}
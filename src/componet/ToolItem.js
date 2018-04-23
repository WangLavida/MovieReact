/**
 * Created by W.J on 2018/4/23.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import color from "../style/color";
import screen from "../common/screen";

let width = (screen.width) / 3;
export default class ToolItem extends Component {
    render() {
        let item = this.props.item;
        console.log(item.title);
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.onPress(item)} activeOpacity={1}
                                    underlayColor={color.colorTransparent}>
                    <View style={{
                        margin: 2,
                        backgroundColor: color.colorWhite,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: width,
                        height: 70
                    }}>
                        <Image source={item.image} style={{height: 30, width: 30}}></Image>
                        <Text style={{color: color.colorPrimary, marginTop: 6}}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
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

export default class ActorItem extends Component<Props> {
    constructor(props) {
        super();
    }

    render() {
        let item = this.props.item;
        return (
            <View style={{backgroundColor: 'white', width: 100}}>
                <TouchableHighlight onPress={() => this.props.onPress(item)} activeOpacity={1}
                                    underlayColor={color.colorTransparent}>
                    <Image source={{uri: item.img, cache: 'force-cache'}}
                           style={{height: 120, width: 100, resizeMode: 'cover'}}></Image>
                </TouchableHighlight>
                <Text style={{
                    color: color.secondaryText,
                    fontSize: 12
                }}>{item.name != "" ? item.name : item.nameEn}</Text>
                <Text style={{color: color.dividerText, fontSize: 12}}>饰 {item.roleName}</Text>
            </View>
        )
    }
}
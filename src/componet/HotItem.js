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

export default class HotItem extends Component<Props> {
    constructor(props) {
        super();
    }

    render() {
        let item = this.props.item;
        console.log(item.img);
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.onPress(item)}>
                    <Image source={{uri: item.img}} style={{height: 200, width: 100}}></Image>
                </TouchableHighlight>
            </View>
        )
    }
}
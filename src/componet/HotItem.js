/**
 * Created by W.J on 2018/4/18.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

export default class HotItem extends Component {
    constructor(props) {
        super();

    }

    render() {
        console.log(this.props.img);
        return (
            <View>
                <Image source={{uri:this.props.img}} style={{height:200,width:100}}></Image>
            </View>
        )
    }
}
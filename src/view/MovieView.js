/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

export default class MovieView extends Component<Props> {
    static navigationOptions = {
        title:'聊天',
    };
    render() {
        return (
            <View>
                <Text>MovieView</Text>
            </View>
        )
    }
}
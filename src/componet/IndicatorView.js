/**
 * Created by W.J on 2018/4/20.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import color from '../style/color'

export default class IndicatorView extends Component<props> {
    constructor(props) {
        super();
    }

    render() {
        if (this.props.showType == 1) {
            return (
                <View>
                    <View style={styles.container}>
                        <ActivityIndicator
                            animating={true}
                            color={color.colorPrimary}
                            size="large"
                        />
                    </View>
                </View>
            )
        } else {
            return null;
        }

    }
}
const styles = StyleSheet.create({
    container: {
        padding:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
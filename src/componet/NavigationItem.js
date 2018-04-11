/**
 * Created by W.J on 2018/4/10.
 */


import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ViewPropTypes} from 'react-native'
import color from '../style/color'
type Props = {
    icon?: any,
    iconStyle?: ViewPropTypes.style,
    titleStyle?: ViewPropTypes.style,
    title?: string,
    onPress?: Function,
}

class NavigationItem extends PureComponent<Props> {
    render() {
        let icon = this.props.icon &&
            <Image style={[styles.icon, this.props.iconStyle]} source={this.props.icon} />

        let title = this.props.title &&
            <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {icon}
                {title}
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 27,
        height: 27,
        margin: 8,
    },
    title: {
        fontSize: 15,
        color: color.colorWhite,
        margin: 8,
    }
})


export default NavigationItem

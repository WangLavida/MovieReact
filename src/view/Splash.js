/**
 * Created by W.J on 2018/4/5.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    ImageBackground,
    StatusBar,
    StyleSheet
} from 'react-native';
import {styles} from '../style/style'
import color from '../style/color'
import screen from '../common/screen'

export default class Splash extends Component<Props> {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('DrawerMain');
        }, 1500)
    }

    state = {
        hidden: true,
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <ImageBackground source={require("../image/splash.jpg")}
                                 style={style.imageBg} resizeMode='stretch'>
                    <TouchableHighlight style={style.touchBg}>
                        <Text style={style.textStyle}>跳过</Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>

        );
    }
}
const style = StyleSheet.create({
    imageBg: {
        justifyContent: "flex-end",
        width: screen.width, height: screen.height,flexDirection:"row"
    },
    touchBg: {
        margin:20,
        height:30,
        backgroundColor: color.dividerText,
        opacity: 4,
        borderRadius: 20,
        justifyContent: 'center',
        borderColor:color.colorPrimary,
        borderWidth:1
    },
    textStyle: {
        color: color.colorWhite,
        fontSize: 15,
        textAlign: 'center',
        paddingLeft: 15,
        paddingRight:15
    }
})
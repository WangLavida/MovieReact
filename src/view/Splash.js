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
import tool from '../common/tool'

var time = 5;
export default class Splash extends Component<Props> {
    constructor(props) {
        super();
        this.state = {
            timeText: time + "秒"
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log(time + "");
            time = time - 1;
            let timeStr = time > 0 ? time + "秒" : "跳过";
            this.setState({
                timeText: timeStr
            })
            if (time == 0) {
                clearInterval(this.timer);
            }
        }, 1000)
    }

    initMian() {
        if (time == 0) {
            this.props.navigation.navigate('DrawerMain');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <ImageBackground source={require("../image/splash.jpg")}
                                 style={style.imageBg} resizeMode='stretch'>
                    <TouchableHighlight style={style.touchBg} onPress={this.initMian.bind(this)}>
                        <Text style={style.textStyle}>{this.state.timeText}</Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>

        );
    }
}
const style = StyleSheet.create({
    imageBg: {
        justifyContent: "flex-end",
        width: screen.width, height: screen.height, flexDirection: "row"
    },
    touchBg: {
        margin: 20,
        height: 30,
        backgroundColor: color.dividerText,
        opacity: 4,
        borderRadius: 20,
        justifyContent: 'center',
        borderColor: color.colorPrimary,
        borderWidth: 1
    },
    textStyle: {
        color: color.colorWhite,
        fontSize: 15,
        textAlign: 'center',
        paddingLeft: 15,
        paddingRight: 15
    }
})
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
    StyleSheet,
    Alert,
    ProgressBarAndroid,
    Modal,
} from 'react-native';
import {styles} from '../style/style'
import color from '../style/color'
import screen from '../common/screen'
import tool from '../common/tool'
import http from '../common/http'
import constant from "../common/constant";
import RNFS from 'react-native-fs';

var time = 5;
var mContext;
export default class Splash extends Component<Props> {
    constructor(props) {
        super();
        this.state = {
            timeText: time + "秒",
            isShowPro: false,
            progress: 0,
            progressText: "0/100",
        }
        mContext = this;
    }

    componentDidMount() {
        // this.props.navigation.navigate('DrawerMain');
        // this.timer = setInterval(() => {
        //     console.log(time + "");
        //     time = time - 1;
        //     let timeStr = time > 0 ? time + "秒" : "跳过";
        //     this.setState({
        //         timeText: timeStr
        //     })
        //     if (time == 0) {
        //         clearInterval(this.timer);
        //     }
        // }, 1000)
        this.checkUpload();
    }
    checkUpload() {
        let params = new Map();
        http.get("更新", constant.uploadUrl, params, () => {
        }, (response) => {
            console.log(response.version);
            console.log(constant.version);
            if (response.version > constant.version) {
                console.log("更新");
                this.showUpdate(response.url);

            } else {
                this.initMian();
            }
        }, (error) => {

        })
    }

    showUpdate(url) {
        Alert.alert(
            '温馨提示',
            '资源文件更新，请下载体验',
            [
                {text: '取消', onPress: () => this.initMian()},
                {
                    text: '更新', onPress: () => {
                        let path = `${RNFS.ExternalDirectoryPath}/bundle.zip`;
                        let targetPath = `${RNFS.ExternalDirectoryPath}`;
                        this.setState({
                            isShowPro: true
                        })
                        tool.uploadFile(url, path, function (progress) {
                            mContext.setState({
                                progress:progress,
                                progressText:parseInt(progress*100)+"/100"
                            })
                        }, function () {
                            console.log("下载成功")
                            mContext.setState({
                                progress:1,
                                progressText:"100/100"
                            })
                            tool.unzipFile(path, targetPath,function () {
                                mContext.setState({
                                    isShowPro: false
                                })
                                mContext.initMian();
                            });
                        });
                    }
                },

            ],
            {cancelable: false}
        )
    }

    initMian() {
        this.props.navigation.navigate('DrawerMain');
    }

    uploadPro() {
        return this.state.isShowPro &&
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.state.isShowPro}
                onRequestClose={() => {
                    this.setState({
                        isShowPro: false
                    })
                }}
            >
                <View style={{
                    flex: 1,
                    padding: 40,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                    <View style={{
                        // height:60,
                        borderRadius: 10,
                        alignItems: 'center',
                        padding: 20,
                        backgroundColor: color.colorWhite
                    }}>
                        <ProgressBarAndroid style={{height: 20, width: screen.width - 100}} color="blue"
                                            styleAttr='Horizontal' progress={this.state.progress}
                                            indeterminate={false}/>
                        <Text style={{alignSelf: "center"}}>{this.state.progressText}</Text>
                    </View>
                </View>
            </Modal>
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<StatusBar hidden={true}/>*/}
                <ImageBackground source={require("../image/splash.jpg")}
                                 style={style.imageBg} resizeMode='stretch'>
                    {/*<TouchableHighlight style={style.touchBg} onPress={this.initMian.bind(this)}>*/}
                    {/*<Text style={style.textStyle}>{this.state.timeText}</Text>*/}
                    {/*</TouchableHighlight>*/}
                    {this.uploadPro()}
                </ImageBackground>
            </View>

        );
    }
}
const style = StyleSheet.create({
    imageBg: {
        width: screen.width, height: screen.height, flexDirection: "row"
    },
    touchBg: {
        margin: 20,
        height: 30,
        backgroundColor: color.dividerText,
        opacity: 1,
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
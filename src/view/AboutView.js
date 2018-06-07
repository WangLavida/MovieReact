/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    WebView
} from 'react-native';
import color from "../style/color";
import NavigationItem from '../componet/NavigationItem'
import HeadBar from '../componet/HeadBar'
import screen from '../common/screen'
let navigation;
export default class AboutView extends Component<Props> {
    // static navigationOptions = ({navigation, props}) => ({
    //         headerTitle: '关于',
    //         headerTitleStyle: {
    //             color: color.colorWhite,
    //             alignSelf: 'center'
    //         },
    //         headerStyle: {backgroundColor: color.colorPrimary},
    //         headerLeft: (
    //             <NavigationItem
    //                 icon={require("../image/menu.png")}
    //                 onPress={() => {
    //                     navigation.navigate('DrawerToggle');
    //                 }}
    //             />
    //         ),
    //     }
    // )
    constructor(props) {
        super();
        this.leftClick = this.leftClick.bind(this);
    }
    leftClick() {
        navigation.navigate('DrawerToggle')
    }
    render() {
        navigation = this.props.navigation;
        return (
            <View  style={{flex: 1,width:screen.width,height:screen.height}}>
                <HeadBar title="关于" leftClick={this.leftClick}/>
                <WebView
                    style={{flex: 1}}
                    source={{uri: "https://github.com/WangLavida", method: 'GET'}}></WebView>
            </View>
        )
    }
}
/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import color from '../style/color'
import NavigationItem from '../componet/NavigationItem'
import constant from '../common/constant'
import http from '../common/http'

export default class MovieView extends Component<Props> {
    static navigationOptions = ({navigation, props}) => ({
            headerTitle: '电影',
            headerTitleStyle: {
                color: color.colorWhite,
                alignSelf: 'center'
            },
            headerStyle: {backgroundColor: color.colorPrimary},
            headerLeft: (
                <NavigationItem
                    icon={require("../image/menu.png")}
                    onPress={() => {
                        navigation.navigate('DrawerToggle');
                    }}
                />
            ),
        }
    )

    componentDidMount() {
        var params = new Map();
        params.set("locationId", "295");
        http.post("即将上映", constant.comingNew, params, () => {
        }, (response) => {
        }, (error) => {

        });
    }

    render() {
        return (
            <View>
                <Text>MovieView</Text>
            </View>
        )
    }
}
/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import color from "../style/color";
import NavigationItem from '../componet/NavigationItem'
export default class ToolsView extends Component<Props> {
    static navigationOptions = ({navigation, props}) => ({
            headerTitle: '工具',
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
    render() {
        return (
            <View>
                <Text>ToolsView</Text>
            </View>
        )
    }
}
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
        console.log("HAHA");
        fetch(constant.hotCities,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
           console.log(response);
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
/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import color from '../style/color'
import NavigationItem from '../componet/NavigationItem'
import constant from '../common/constant'
import http from '../common/http'
import Swiper from 'react-native-swiper';

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

    constructor(props) {
        super();
        this.state = {
            swiperList: null
        }
    }

    componentDidMount() {
        var params = new Map();
        params.set("locationId", "295");
        http.post("即将上映", constant.comingNew, params, () => {
        }, (response) => {
            this.setState({
                swiperList: response.attention.slice(0, 6)
            });
        }, (error) => {

        });
    }


    render() {
        return (
            <View>
                {
                    this.state.swiperList != null ? <Swiper
                        height={200} showsButtons={false} autoplay={true}>
                        {
                            this.state.swiperList.map((item) => {
                                let uri = "uri:" + "'" + item.videos[0].image + "'";
                                console.log(uri);
                            })
                        }
                    </Swiper> : null
                }
            </View>
        )
    }
}
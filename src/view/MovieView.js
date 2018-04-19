/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    FlatList
} from 'react-native';
import color from '../style/color'
import NavigationItem from '../componet/NavigationItem'
import constant from '../common/constant'
import http from '../common/http'
import screen from '../common/screen'
import Carousel from 'react-native-looped-carousel';
import HotItem from '../componet/HotItem'

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
            swiperList: null,
            hotList: null,
            hotData: null,
            swiperWidth: 0
        }
        this.renderItemView = this.renderItemView.bind(this);
    }

    componentDidMount() {
        var params = new Map();
        params.set("locationId", "295");
        http.post("即将上映", constant.comingNew, params, () => {
        }, (response) => {
            this.setState({
                swiperList: response.attention.slice(0, 5)
            });
        }, (error) => {

        });
        http.post("正在售票", constant.hotMovies, params, () => {
        }, (response) => {
            let dataBlob = [];
            let i = 0;
            response.movies.map(function (item) {
                dataBlob.push({
                    key: i,
                    value: item.img,
                })
                i++;
            });
            this.setState({
                hotList: response.movies,
                hotData: dataBlob
            });
        }, (error) => {

        });
    }

    swiperClick(id) {
        console.log(id);
    }

    swiperView() {
        return this.state.swiperList != null &&
            <Carousel
                delay={4000}
                style={{width: screen.width, height: 170}}
                autoplay={true}
                pageInfo={false}
                bullets={true}
                bulletStyle={{backgroundColor: color.colorPrimaryDark, width: 5, height: 5}}
                chosenBulletStyle={{backgroundColor: color.colorPrimary, width: 5, height: 5}}
            >
                {this.state.swiperList.map((item, i) => {
                    let path = item.videos[0].image;
                    console.log(path);
                    return <TouchableHighlight onPress={this.swiperClick.bind(this, item.id)} key={i}>
                        <Image resizeMode="stretch"
                               style={{
                                   width: screen.width,
                                   height: 170
                               }}
                               source={{
                                   uri: path,
                                   cache: 'force-cache'
                               }}></Image></TouchableHighlight>
                })}
            </Carousel>
    }

    hotClick(item) {
        console.log(item.movieId);
    }

    renderItemView({item}) {
        return <HotItem item={item} onPress={this.hotClick}/>
    }

    sepa() {
        return (<View style={{width: 5}}></View>)
    }


    hotView() {
        return this.state.hotList != null &&
            <FlatList
                ItemSeparatorComponent={this.sepa}
                style={{marginTop: 5, marginLeft: 5, marginRight: 5}}
                data={this.state.hotList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItemView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}></FlatList>
    }

    render() {
        return (
            <View>
                {this.swiperView()}
                {this.hotView()}
            </View>
        )
    }
}
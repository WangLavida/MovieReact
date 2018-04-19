/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    FlatList,
    ScrollView
} from 'react-native';
import color from '../style/color'
import NavigationItem from '../componet/NavigationItem'
import constant from '../common/constant'
import http from '../common/http'
import screen from '../common/screen'
import Carousel from 'react-native-looped-carousel';
import HotItem from '../componet/HotItem'
import SellItem from '../componet/SellItem'

export default class MovieView extends Component<Props> {
    static navigationOptions = ({navigation, props}) => ({
            headerTitle: '电影',
            headerTitleStyle: {
                color: color.colorWhite,
                alignSelf: 'center',
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
            sellList: null
        }
        this.renderHotItemView = this.renderHotItemView.bind(this);
        this.renderSellItemView = this.renderSellItemView.bind(this);
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
            this.setState({
                hotList: response.movies,
            });
        }, (error) => {

        });
        var paramsTheaters = new Map();
        paramsTheaters.set("apikey", "0b2bdeda43b5688921839c8ecb20399b");
        paramsTheaters.set("city", "合肥");
        paramsTheaters.set("start", "0");
        paramsTheaters.set("count", "6");
        http.post("正在上映", constant.theatersMovies, paramsTheaters, () => {
        }, (response) => {
            this.setState({
                sellList: response.subjects,
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

    renderHotItemView({item}) {
        return <HotItem item={item} onPress={this.hotClick}/>
    }

    sepa() {
        return (<View style={{width: 5, height: 5}}></View>)
    }


    hotView() {
        return this.state.hotList != null &&
            <FlatList
                ItemSeparatorComponent={this.sepa}
                style={{marginTop: 5, marginLeft: 5, marginRight: 5}}
                data={this.state.hotList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderHotItemView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}></FlatList>
    }
    sellClick(item) {
        console.log(item.id);
    }
    renderSellItemView({item}) {
        return <SellItem item={item} onPress={this.sellClick}/>
    }
    sellView() {
        return this.state.hotList != null &&
            <FlatList
                ItemSeparatorComponent={this.sepa}
                style={{marginTop: 5, marginLeft: 5, marginRight: 5}}
                data={this.state.sellList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderSellItemView}
                showsHorizontalScrollIndicator={false}></FlatList>
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.swiperView()}
                    {this.hotView()}
                    {this.sellView()}
                </ScrollView>
            </View>
        )
    }
}
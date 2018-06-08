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
import IndicatorView from '../componet/IndicatorView'
import {connect} from 'react-redux'
import HeadBar from '../componet/HeadBar'
import storageApi from '../common/storageApi'

let pageNo = 0;
let navigation;
class MovieView extends Component{
    // static navigationOptions = ({navigation, props}) => ({
    //         headerTitle: '电影',
    //         headerTitleStyle: {
    //             color: color.colorWhite,
    //             alignSelf: 'center',
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
        this.state = {
            swiperList: null,
            hotList: null,
            sellList: [],
            sellType: 0,
        }

        this.renderHotItemView = this.renderHotItemView.bind(this);
        this.renderSellItemView = this.renderSellItemView.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.endReached = this.endReached.bind(this);
        this.contentViewScroll = this.contentViewScroll.bind(this);
        this.leftClick = this.leftClick.bind(this);

    }

    componentDidMount() {
        this.getMovies();
        this.getSellData();
    }

    leftClick() {
        navigation.navigate('DrawerToggle')
    }

    getMovies() {
        let params = new Map();
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
    }

    getSellData() {
        let params = new Map();
        params.set("apikey", "0b2bdeda43b5688921839c8ecb20399b");
        params.set("city", "合肥");
        params.set("start", pageNo);
        params.set("count", "10");
        http.post("正在上映", constant.theatersMovies, params, () => {
        }, (response) => {
            this.setState({
                sellList: this.state.sellList.concat(response.subjects),
                sellType: 0
            });
        }, (error) => {

        });
    }

    swiperClick(item) {
        console.log(item.id);
        navigation.navigate('MovieDetail',{id:item.id,name:item.title});
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
                    return <TouchableHighlight onPress={this.swiperClick.bind(this, item)} key={i}>
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
        navigation.navigate('MovieDetail',{id:item.movieId,name:item.titleCn});
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

    endReached() {
        console.log(this.state.sellType);
        if (this.state.sellType != 1) {
            pageNo++;
            this.setState({
                sellType: 1
            });
            this.getSellData();
        }
    }

    contentViewScroll(e) {
        console.log("1");
        var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        var contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        console.log(offsetY + "=" + contentSizeHeight + "=" + oriageScrollHeight);
        if ((offsetY + oriageScrollHeight + 20) >= contentSizeHeight) {
            console.log("1");
            if (this.state.sellType != 1) {
                pageNo++;
                this.setState({
                    sellType: 1
                });
                this.getSellData();
            }
        }
    }

    renderFooter() {
        return <IndicatorView showType={this.state.sellType}/>
    }

    sellView() {
        return this.state.sellList.length != 0 &&
            <FlatList
                ItemSeparatorComponent={this.sepa}
                style={{marginTop: 5, marginLeft: 5, marginRight: 5}}
                data={this.state.sellList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderSellItemView}
                ListFooterComponent={this.renderFooter()}
                // onEndReached={this.endReached}
                // onEndReachedThreshold={0.1}
                showsHorizontalScrollIndicator={false}
            ></FlatList>
    }

    render() {
        navigation = this.props.navigation;
        return (
            <View>
                <HeadBar title="Movie" leftClick={this.leftClick}/>
                <ScrollView
                    onScroll={this.contentViewScroll}>
                    {this.swiperView()}
                    {this.hotView()}
                    {this.sellView()}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})
export default connect(mapStateToProps)(MovieView)
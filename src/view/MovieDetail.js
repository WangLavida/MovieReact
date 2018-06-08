/**
 * Created by W.J on 2018/6/7.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import HeadBar from '../componet/HeadBar'
import CollapsibleText from '../componet/CollapsibleText'
import ActorItem from '../componet/ActorItem'
import {connect} from "react-redux";
import Tool from "../common/tool"
import http from "../common/http";
import constant from "../common/constant";
import color from '../style/color'
import moment from 'moment';
import StarRating from 'react-native-star-rating';

class MovieDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            movie: null
        }
        this.leftClick = this.leftClick.bind(this);
        this.renderActorsItemView = this.renderActorsItemView.bind(this);
    }

    componentDidMount() {
        this.initData();
    }

    leftClick() {
        this.props.navigation.goBack();
    }

    initData() {
        let params = new Map();
        params.set("locationId", "295");
        params.set("movieId", this.props.navigation.state.params.id);
        http.post("时光网详情", constant.mDetail, params, () => {
        }, (response) => {
            this.setState({
                movie: response.data.basic
            });
        }, (error) => {

        });
    }

    sepa() {
        return (<View style={{width: 5, height: 5}}></View>)
    }

    actorClick(item) {
        console.log(item.actorId);
    }

    renderActorsItemView({item}) {
        return <ActorItem item={item} onPress={this.actorClick}/>
    }

    initView() {
        let movie = this.state.movie;
        let typeStr = "";
        if (this.state.movie != null) {
            let type = movie.type;
            type.map((item, i) => {
                typeStr = typeStr + item + " ";
            });
        }

        return this.state.movie != null &&
            <View style={{backgroundColor: color.colorWhite, flex: 1, padding: 6}}>
                <View style={{height: 160, flexDirection: 'row', backgroundColor: color.colorMovieBg}}>
                    <Image style={{height: 160, width: 100}} source={{uri: movie.img}}></Image>
                    <View style={{paddingLeft: 10, paddingTop: 10}}>
                        <Text style={{fontSize: 18, color: color.colorWhite}}>{movie.name}</Text>
                        <Text style={{fontSize: 14, color: color.colorWhite, paddingTop: 5}}>{movie.nameEn}</Text>
                        <Text style={{fontSize: 14, color: color.colorWhite, paddingTop: 5}}>{typeStr}</Text>
                        <Text style={{fontSize: 14, color: color.colorWhite, paddingTop: 5}}>{movie.mins}</Text>
                        <Text style={{
                            fontSize: 14,
                            color: color.colorWhite,
                            paddingTop: 5
                        }}>{moment(movie.showDay).format('YYYY-MM-DD') + movie.releaseArea + "上映"}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <StarRating
                        starSize={25}
                        disabled={false}
                        maxStars={5}
                        rating={movie.overallRating / 2}
                        emptyStar={require('../image/emptyStar.png')}
                        fullStar={require('../image/fullStar.png')}
                        halfStar={require('../image/halfStar.png')}
                    />
                    <Text style={{
                        fontSize: 16,
                        color: color.secondaryText,
                        marginLeft: 5
                    }}>{movie.overallRating + "分"}</Text>
                    <Text style={{
                        fontSize: 16,
                        color: color.secondaryText,
                        marginLeft: 5
                    }}>{movie.personCount + "人评分"}</Text>
                </View>
                <CollapsibleText numberOfLines={2}>简介：{movie.story}</CollapsibleText>
                <FlatList
                    ItemSeparatorComponent={this.sepa}
                    style={{marginTop: 10}}
                    data={movie.actors}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderActorsItemView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}></FlatList>
            </View>
    }

    render() {
        // 读取
        let theme = storage.load({
            key: 'theme',

            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: true,

            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
            syncInBackground: true,

            // 你还可以给sync方法传递额外的参数
            syncParams: {
                extraFetchOptions: {
                    // 各种参数
                },
                someFlag: true,
            },
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法
            console.log(ret);
        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        })
        return (
            <View style={{flex: 1}}>
                <HeadBar title={this.props.navigation.state.params.name} leftClick={this.leftClick}
                         leftImg={require("../image/back.png")}/>
                <ScrollView>
                    {this.initView()}
                </ScrollView>
                <Text style={{
                    padding:10,
                    textAlign: 'center',
                    backgroundColor: this.props.themeColor,
                    fontSize: 18,
                    justifyContent: 'center',
                    color: color.colorWhite
                }}>立即购票</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})
export default connect(mapStateToProps)(MovieDetail)
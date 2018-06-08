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
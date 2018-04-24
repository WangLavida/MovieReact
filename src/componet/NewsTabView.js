/**
 * Created by W.J on 2018/4/24.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import NewsItem from '../componet/NewsItem'
import http from "../common/http";
import constant from "../common/constant";

export default class NewsTabView extends Component {
    constructor(props) {
        super();
        this.state = {
            newsData: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    renderItem({item}) {
        return <NewsItem item={item}/>
    }

    getData() {
        let item = this.props.item;
        let params = new Map();
        params.set("category", item.category);
        params.set("refer", "1");
        params.set("count", "20");
        params.set("min_behot_time", "1491981025");
        params.set("last_refresh_sub_entrance_interval", (new Date).getTime());
        params.set("loc_time", "1492079387");
        params.set("tt_from", "pull");
        params.set("device_id", "12345678952");
        params.set("ac", "wifi");
        params.set("iid", "0123456789");
        params.set("abflag", "3");
        params.set("language", "zh");
        params.set("openudid", "1b8d5bf69dc4a561");
        http.post(item.name + "新闻", constant.news, params, () => {
        }, (response) => {
            this.setState({
                newsData: response.data
            })
        }, (error) => {

        });
    }

    render() {
        let item = this.props.item;
        return (
            <FlatList
                style={{marginTop: 5, marginLeft: 5, marginRight: 5}}
                data={this.state.newsData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
            ></FlatList>
        )
    }
}
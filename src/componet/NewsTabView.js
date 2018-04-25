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
import color from "../style/color"

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
        params.set("tag", item.category);
        params.set("as", "A125A8CEDCF8987");
        params.set("count", "20");
        params.set("format", "json_raw");
        http.get(item.name + "新闻", constant.news, params, () => {
        }, (response) => {
            this.setState({
                newsData: response.data
            })
        }, (error) => {

        });
    }

    sepa() {
        return (<View style={{width: 5, height: 5}}></View>)
    }

    render() {
        let item = this.props.item;
        return (
            <FlatList
                ItemSeparatorComponent={this.sepa}
                style={{margin: 5}}
                data={this.state.newsData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
                showsHorizontalScrollIndicator={false}
            ></FlatList>
        )
    }
}
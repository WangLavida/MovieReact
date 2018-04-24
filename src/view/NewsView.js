/**
 * Created by W.J on 2018/4/24.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import color from "../style/color";
import NavigationItem from '../componet/NavigationItem'
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view'
import NewsItem from '../componet/NewsItem'
import http from "../common/http";
import constant from "../common/constant";
import NewsTab from "../componet/NewsTabView"

let tabData = [{category: "news_world", name: "国际"}, {
    category: "news_sport",
    name: "体育"
}, {
    category: "news_finance",
    name: "财经"
}, {category: "news_military", name: "军事"}, {category: "news_tech", name: "科技"}, {
    category: "news_car",
    name: "汽车"
}, {category: "question_and_answer", name: "问答"}];
export default class NewsView extends Component {
    static navigationOptions = ({navigation, props}) => ({
            headerTitle: '新闻',
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
            newsData: []
        }
        this.setTab = this.setTab.bind(this);
    }

    onRefresh(i) {
        console.log("切换===" + i);
    }

    setTab() {
        return <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <DefaultTabBar/>}
            tabBarBackgroundColor={color.colorWhite}
            tabBarActiveTextColor={color.colorPrimary}
            tabBarInactiveTextColor={color.dividerText}
            tabBarUnderlineStyle={{backgroundColor: color.colorPrimary}}
            onChangeTab={(obj) => {
                this.onRefresh(obj.i)
            }}
        >
            {tabData.map((item, i) => {
                return <NewsTab tabLabel={item.name} key={i} item={item}/>
            })}

        </ScrollableTabView>
    }

    render() {
        return (
            this.setTab()
        )
    }
}
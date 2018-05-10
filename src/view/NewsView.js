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
import {connect} from "react-redux";
import HeadBar from '../componet/HeadBar'

let tabData = [{
    category: "__all__",
    name: "推荐"
}, {category: "news_hot", name: "热点"}, {category: "news_world", name: "国际"}, {
    category: "news_military",
    name: "军事"
}, {category: "news_tech", name: "科技"}, {
    category: "news_society",
    name: "社会"
}, {
    category: "news_sports",
    name: "体育"
}];
let navigation;

class NewsView extends Component {
    // static navigationOptions = ({navigation, props}) => ({
    //         headerTitle: '新闻',
    //         headerTitleStyle: {
    //             color: color.colorWhite,
    //             alignSelf: 'center'
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
            newsData: []
        }
        this.setTab = this.setTab.bind(this);
        this.leftClick = this.leftClick.bind(this);
    }

    leftClick() {
        navigation.navigate('DrawerToggle')
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
        console.log(this.props.themeColor);
        return (
            this.setTab()
        )
    }
}

const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})
export default connect(mapStateToProps)(NewsView)
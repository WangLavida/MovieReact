/**
 * Created by W.J on 2018/4/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import color from "../style/color";
import NavigationItem from '../componet/NavigationItem'
import ToolItem from '../componet/ToolItem'

export default class ToolsView extends Component<Props> {
    static navigationOptions = ({navigation, props}) => ({
            headerTitle: '工具',
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
        this.renderItem = this.renderItem.bind(this);
    }

    sepa() {
        return (<View style={{height: 1, backgroundColor: color.colorPrimary}}></View>)
    }

    clickItem(item) {
        console.log(item.title);
    }

    renderItem({item}) {
        return <ToolItem item={item} onPress={this.clickItem}/>;
    }

    setData() {
        return <FlatList
            ItemSeparatorComponent={this.sepa}
            numColumns={3}
            // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}
            data={this.getData()}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.sepa}
            renderItem={this.renderItem}></FlatList>
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
                {this.setData()}
            </View>
        )
    }

    getData() {
        return (
            [
                {id: 1, title: '测试1', image: require('../image/tool_sel.png')},
                {id: 2, title: '测试2', image: require('../image/tool_sel.png')},
                {id: 3, title: '测试3', image: require('../image/tool_sel.png')},
                {id: 4, title: '测试4', image: require('../image/tool_sel.png')},
                {id: 5, title: '测试5', image: require('../image/tool_sel.png')},
                {id: 6, title: '测试6', image: require('../image/tool_sel.png')},
                {id: 7, title: '测试7', image: require('../image/tool_sel.png')},
                {id: 8, title: '测试8', image: require('../image/tool_sel.png')},
                {id: 9, title: '测试9', image: require('../image/tool_sel.png')},
            ]
        )
    }
}
/**
 * Created by W.J on 2018/4/24.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import color from "../style/color";

export default class SellItem extends Component {
    constructor(props) {
        super();
    }

    render() {
        let item = this.props.item;
        let imageUrl = "";
        let title = item.title;
        if (item.image_list.length > 0) {
            imageUrl = item.image_list[0].url;
        } else if (item.image_url != null) {
            imageUrl = item.image_url;
        }
        return (
            <TouchableHighlight activeOpacity={1}
                                underlayColor={color.colorTransparent}>
                <View style={{
                    backgroundColor: color.colorWhite,
                    padding: 5,
                    flexDirection: "row",
                    alignItems: 'center',
                }}>
                    {
                        imageUrl != "" && <Image source={{uri: imageUrl}} style={{height: 80, width: 100}}></Image>
                    }

                    <Text style={{
                        flex: 1,
                        paddingLeft: 10,
                        paddingRight: 5,
                        color: color.primaryText,
                        fontSize: 18
                    }}>{title}</Text>
                </View>
            </TouchableHighlight>

        )


    }
}
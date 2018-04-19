/**
 * Created by W.J on 2018/4/19.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    StyleSheet
} from 'react-native';
import color from "../style/color";

export default class SellItem extends Component {
    constructor(props) {
        super();
    }

    render() {
        let item = this.props.item;
        return (

            <TouchableHighlight onPress={() => this.props.onPress(item)} activeOpacity={1}
                                underlayColor={color.colorTransparent}>
                <View style={styles.container}>
                    <Image source={{uri: item.images.small}} style={{height: 120, width: 80}}></Image>
                    <View style={styles.midContainer}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontSize: 20, color: color.primaryText}}>{item.title}</Text>
                            {item.genres.map((genre) => {
                                return <View style={styles.genre}><Text
                                    style={{fontSize: 10, color: color.colorWhite}}>{genre}</Text></View>
                            })}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    midContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
    },
    genre: {
        flexDirection: "row",
        marginLeft: 5,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: "center",
        backgroundColor: color.dividerText,
        borderRadius: 5,
    },
});

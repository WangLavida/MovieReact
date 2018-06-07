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
import {connect} from "react-redux";

class SellItem extends Component {
    constructor(props) {
        super();
    }

    render() {
        let item = this.props.item;
        let casts = "";
        item.casts.map((cast) => {
            casts = casts + cast.name + ",";
        })
        return (
            <TouchableHighlight onPress={() => this.props.onPress(item)} activeOpacity={1}
                                underlayColor={color.colorTransparent}>
                <View style={styles.container}>
                    <Image source={{uri: item.images.small}} style={{height: 120, width: 80}}></Image>
                    <View style={styles.midContainer}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{
                                fontSize: 20,
                                color: this.props.themeColor,
                                alignSelf: "flex-end"
                            }}>{item.title}</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                        {item.genres.map((genre, i) => {
                            return <View style={[styles.genre,{backgroundColor: this.props.themeColor}]} key={i}><Text
                                style={{fontSize: 10, color: color.colorWhite}}>{genre}</Text></View>
                        })}
                        </View>
                        <Text style={{
                            fontSize: 14,
                            color: color.secondaryText,
                            marginTop: 5
                        }}>导演：{item.directors[0].name}</Text>
                        <Text style={{
                            fontSize: 12,
                            color: color.secondaryText,
                            marginTop: 5,
                            paddingRight: 100
                        }}>主演：{casts}</Text>
                    </View>
                </View>
            </TouchableHighlight>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor:'white'
    },
    midContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
        justifyContent: "center",
    },
    genre: {
        height: 20,
        marginLeft: 5,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: "center",
        borderRadius: 5,
        alignSelf: "flex-end"
    },
});
const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})
export default connect(mapStateToProps)(SellItem)
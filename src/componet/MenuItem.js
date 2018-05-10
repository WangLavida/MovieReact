/**
 * Created by W.J on 2018/4/11.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import color from "../style/color";
import {connect} from "react-redux";

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.view} onPress={() => this.props.itemClick()}>
                <Image source={this.props.icon}></Image>
                <Text style={[styles.text,{color: this.props.themeColor}]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = {
    view: {
        flexDirection: 'row', marginLeft: 20, marginTop: 20, alignItems: 'center'
    },
    text: {
        marginLeft: 10,  fontSize: 15
    }
}
const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})
export default connect(mapStateToProps)(MenuItem)
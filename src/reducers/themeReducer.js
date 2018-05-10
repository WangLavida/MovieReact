/**
 * Created by W.J on 2018/5/2.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import color from '../style/color'
import * as types from '../action/actionTypes';

const initialState = {
    themeColor: color.colorPrimary,
    homeIcon: require("../image/home.png"),
    themeIcon: require("../image/theme.png"),
};

export default function setTheme(state = initialState, action) {
    console.log("type" + action.type);
    switch (action.type) {
        case types.SET_THEME:
            return {
                ...state,
                themeColor: action.themeColor,
                homeIcon: require("../image/home.png"),
                themeIcon: require("../image/theme.png")
            };
        case types.SET_THEME1:
            return {
                ...state,
                themeColor: action.themeColor,
                homeIcon: require("../image/home1.png"),
                themeIcon: require("../image/theme1.png")
            };
        default:
            return state;
    }
}
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
import storageApi from '../common/storageApi';

const initialState = {
    themeColor: color.colorPrimary,
    homeIcon: require("../image/home.png"),
    themeIcon: require("../image/theme.png"),
};

export default function setTheme(state = initialState, action) {
    console.log("type" + action.type);
    switch (action.type) {
        case types.SET_THEME:
            storageApi.saveData(types.THEME,action.themeColor);
            return {
                ...state,
                themeColor: action.themeColor,
                homeIcon: require("../image/home.png"),
                themeIcon: require("../image/theme.png")
            };
        case types.SET_THEME1:
            storageApi.saveData(types.THEME,action.themeColor);
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
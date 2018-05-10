/**
 * Created by W.J on 2018/5/2.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import * as types from './actionTypes';
import color from '../style/color';

export function changeTheme(themeColor) {
    if (themeColor == color.colorPrimary) {
        return {type: types.SET_THEME, themeColor: themeColor};
    }else{
        return {type: types.SET_THEME1, themeColor: themeColor};
    }
}
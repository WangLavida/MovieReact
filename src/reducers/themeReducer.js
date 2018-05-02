/**
 * Created by W.J on 2018/5/2.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import color from '../style/color'

const initialState = {
    themeColor: color.colorPrimary,
};

export default function color(state = initialState, action) {
    return {
        ...state,
        themeColor: action.themeColor
    }
}
/**
 * Created by W.J on 2018/5/2.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import themeReducer from './themeReducer'

export default combineReducers({
    theme: themeReducer
})
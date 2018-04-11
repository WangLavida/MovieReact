/**
 * Created by W.J on 2018/4/11.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ToastAndroid
} from 'react-native';

export function toast(msg) {
    ToastAndroid.show(msg, ToastAndroid.LONG);
}
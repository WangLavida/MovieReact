/**
 * Created by W.J on 2018/5/2.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import combineReducers from '../reducers/index'

const middlewares = [thunk];

const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//配置store信息
export default function configureStore(initialState) {
    //创建store
    const store = createSoreWithMiddleware(combineReducers, initialState);
    return store;
}
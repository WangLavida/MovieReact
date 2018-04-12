/**
 * Created by W.J on 2018/4/12.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

export default class http {
    static post(TAG, url, parames, loadCallBack, callBackSuccess, callBackError) {
        console.log("start===" + TAG + url);
        loadCallBack();
        fetch(url, {
            method: 'POST',//如果为GET方式，则不要添加body，否则会出错    GET/POST
            header: {//请求头
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //请求参数
            body: parames
        }).then((response) => {
            //将数据转成json,也可以转成 response.text、response.html
            if (response.ok) {
                return response.json();
            } else {
                console.log("error===" + TAG);
                console.log(response);
                callBackError(response);
            }
        }).then((responseJson) => {
            //成功回调
            if (responseJson != null) {
                console.log("success===" + TAG + JSON.stringify(responseJson));
                callBackSuccess(responseJson);
            }
        }).catch((error) => {
            //失败回调
            console.log("error===" + TAG + error);
            callBackError(error);
        });
    }

    static get(TAG, url, loadCallBack, callBackSuccess, callBackError) {
        console.log("start===" + TAG + url);
        loadCallBack();
        fetch(url, {
            method: 'POST',//如果为GET方式，则不要添加body，否则会出错    GET/POST
            header: {//请求头
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            //将数据转成json,也可以转成 response.text、response.html
            if (response.ok) {
                return response.json();
            } else {
                console.log("error===" + TAG);
                console.log(response);
                callBackError(response);
            }
        }).then((responseJson) => {
            //成功回调
            if (responseJson != null) {
                console.log("success===" + TAG + JSON.stringify(responseJson));
                callBackSuccess(responseJson);
            }
        }).catch((error) => {
            //失败回调
            console.log("error===" + TAG + error);
            callBackError(error);
        });
    }
}

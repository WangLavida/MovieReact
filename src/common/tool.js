/**
 * Created by W.J on 2018/4/11.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ToastAndroid
} from 'react-native';
import RNFS from 'react-native-fs';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
export default class tool {
    static toast(msg) {
        ToastAndroid.show(msg + "", ToastAndroid.LONG);
    }

    static uploadFile(url, path,callBack) {
        const options = {
            fromUrl: url,
            toFile: path,
            background: true,
            begin: (res) => {
                console.log('begin', res);
                console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
            progress: (res) => {
                let pro = res.bytesWritten / res.contentLength;
                console.log(pro*100);
                // this.setState({progressNum: pro,});
            }
        };
        try {
            const ret = RNFS.downloadFile(options);
            ret.promise.then(res => {
                console.log('success', res);
                console.log('file://' + path)
                callBack();
            }).catch(err => {
                console.log('err', err);
            });
        } catch (e) {
            console.log(error);
        }
    }
    static unzipFile(sourcePath, targetPath){
        unzip(sourcePath, targetPath)
            .then((path) => {
                console.log(`unzip completed at ${path}`)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

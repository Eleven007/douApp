/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/20
 * 历史修订：
 */
import React from 'react';
import {
    Dimensions,
    PixelRatio,
    ActivityIndicator
} from 'react-native';

let Util = {
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    //post请求
    post: function (url, data, callback) {
        let fetchOption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        fetch(url, fetchOption)
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });

    },
    getJSON: function (url, successCallback, failCallback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((error) => {
                failCallback(error);
            });
    },
    /*loading效果*/
    loading: <ActivityIndicator color="#3e00ff" style={{marginTop: 40, marginLeft: Dimensions.get('window') / 2 - 10}}/>
};
module.exports = Util;
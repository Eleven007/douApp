/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
import Util from './util' ;
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

export default class extends Component {
    render() {
        return (
            <View style={styles.flex_1}>
                <TextInput style={[styles.flex_1, styles.input]} autoCapitalize='none'
                           underlineColorAndroid="transparent"
                           clearButtonMode='while-editing' {...this.props}/>
            </View>
        );
    }
};

let styles = StyleSheet.create({
    flex_1: {
        flex: 1
    },
    input: {
        borderWidth: Util.pixel,
        height: 40,
        paddingTop:0,
        paddingBottom:0,
        borderColor: '#333',
        paddingLeft: 5
    }
});
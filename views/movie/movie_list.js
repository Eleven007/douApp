/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class extends Component{
    static navigationOptions = ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#1296db',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            alignSelf: "center"
        }
    });
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text>movieList</Text>
            </View>
        )
    }
}
/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import Book from '../book';
import Music from  '../music';
import Movie from '../movie';
import {TabNavigator} from 'react-navigation';
const tabBars = TabNavigator({
    Book: {
        screen: Book,
        navigationOptions: {
            title: '图书',
            tabBarLabel: '图书',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('../../images/book.png')} style={[{tintColor: tintColor}, styles.icon]}/>),
        }
    },
    Movie: {
        screen: Movie,
        navigationOptions: {
            title: '电影',
            tabBarLabel: '电影',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('../../images/movie.png')} style={[{tintColor: tintColor}, styles.icon]}/>),
        }
    },
    Music: {
        screen: Music,
        navigationOptions: {
            title: '音乐',
            tabBarLabel: '音乐',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('../../images/music.png')} style={[{tintColor: tintColor}, styles.icon]}/>),
        }
    }
}, {
    initialRouteName: 'Book',
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#007aff', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    }
});
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
module.exports=tabBars;
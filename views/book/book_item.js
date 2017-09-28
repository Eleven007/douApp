/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
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
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Util from './../common/util' ;
export default class extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let row = this.props.row.item;
        return(
            <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
                <View style={[styles.center]}>
                    <Image source={{uri: row.image}} style={styles.book_img}/>
                </View>
                <View style={styles.content}>
                    <View style={{flex:1}}>
                        <Text  numberOfLines={1}>{row.title}</Text>
                    </View>
                    <View style={{marginTop:5,flex:1}}>
                        <Text style={[styles.publisher, {flex:1}]} numberOfLines={1}>{row.publisher}</Text>
                    </View>
                    <View style={{marginTop:5,flex:1}}>
                        <Text style={[styles.publisher, {flex:1}]} numberOfLines={1}>{row.author}</Text>
                    </View>
                    <View style={[styles.row,{marginTop:5,flex:1}]}>
                        <Text style={styles.price}>{row.price}</Text>
                        <Text style={styles.pages}>{row.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    item:{
        height:120,
        borderTopWidth:Util.pixel,
        borderBottomWidth:Util.pixel,
        marginTop:5,
        marginBottom:5,
        borderColor:'#ccc'
    },
    book_img:{
        width:80,
        height:100,
        resizeMode:Image.resizeMode.contain
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    publisher:{
        color:'#A3A3A3',
        fontSize:13
    },
    price:{
        color:'#2BB2A3',
        fontSize:16
    },
    pages:{
        marginLeft:10,
        color:'#A7A0A0'
    }
});
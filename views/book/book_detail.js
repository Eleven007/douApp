/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Util from './../common/util' ;
import BookItem from './book_item' ;
import ServiceURL from './../common/Service' ;
export default class extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params.title,
        headerBackTitle: '返回',
        headerStyle: {
            backgroundColor: '#1296db',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            alignSelf: "center"
        },
        tabBarVisible: false,
    });

    constructor(props) {
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        let that = this;
        let url = ServiceURL.book_detail + '/' + params.id;
        Util.getJSON(url, function (data) {
            that.setState({
                data: data
            });
        }, function (err) {
            alert(err);
        });
    }
    render() {
        return (
            <View style={[styles.m10]}>
                <ScrollView style={styles.m10}>
                    {
                        this.state.data ?
                            <View>
                                <BookItem row={{item:this.state.data}}/>
                                <View>
                                    <Text style={[styles.title]}>图书简介</Text>
                                    <Text style={styles.text}>{this.state.data.summary}</Text>
                                </View>

                                <View>
                                    <Text style={[styles.title]}>作者简介</Text>
                                    <Text style={styles.text}>{this.state.data.author_intro}</Text>
                                </View>
                                <View style={{height: 50}}>

                                </View>
                            </View>
                            : Util.loading
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    m10: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: '#000D22'
    }
});

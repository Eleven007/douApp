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
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import BookItem from './book_item' ;
import Util from './../common/util' ;
import Search from './../common/search' ;
import ServiceURL from './../common/Service' ;

export default class extends Component {
    static navigationOptions = ({navigation}) => ({
        header:null,
        headerStyle: {
            backgroundColor: '#1296db',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            alignSelf: "center"
        }
    });

    constructor(props) {
        super(props);
        this.state = {
            keywords: 'C语言',
            show: false
        }
    }

    render() {
        return (
            <View style={[styles.flex_1, {marginBottom: 44}]}>
                <View style={[styles.search, styles.row]}>
                    <View style={styles.flex_1}>
                        <Search placeholder="请输入图书的名称" onChangeText={(value) => {
                            this._changeText(value);
                        }}
                                defaultValue={this.state.keywords}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={this._search.bind(this)}>
                        <Text style={styles.fontFFF}>搜索</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.show ?
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={this._renderItem.bind(this)}
                        />
                        : Util.loading
                }
            </View>
        )
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let that = this;
        let baseURL = ServiceURL.book_search + '?count=10&q=' + this.state.keywords;
        //开启loading
        this.setState({
            show: false
        });
        Util.getJSON(baseURL, function (data) {
            if (!data.books || !data.books.length) {
                // return alert('图书服务出错');
            }
            let books = data.books;
            that.setState({
                dataSource: books,
                show: true
            });
        }, function (err) {
            alert(err);
        });
    }

    _renderItem(item) {
        let that=this;
        return (
            <BookItem row={item} key="" onPress={that._loadPage.bind(that,item.item.id,item.item.title)}/>
        )
    }
    _loadPage(id,title){
        const {navigate} = this.props.navigation;
        navigate("bookDetail", {
            id: id,
            title:title
        })
    }
    _changeText(val) {
        this.setState({
            keywords: val
        });
    }
    _search() {
        this.getData();
    }
}
const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
    },
    search: {
        marginTop:10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
        height: 42,
    },
    btn: {
        width: 40,
        backgroundColor: '#0091FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Util.pixel,
    },
    fontFFF: {
        color: '#fff'
    },
    row: {
        flexDirection: 'row'
    }
});
/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
import bookList from './book/book_list';
import bookDetail from './book/book_detail';
import {StackNavigator} from 'react-navigation';
const ModalStack = StackNavigator({
    bookList: {
        screen: bookList,
        navigationOptions: {
            headerTitle: '图书',
        }
    },
    bookDetail: {
        screen: bookDetail,
        navigationOptions: {tabBarVisible: false}
    }
}, {
    initialRouteParams: {
        type: '图书'
    }
});
module.exports=ModalStack;
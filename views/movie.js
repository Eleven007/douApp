import movieList from './movie/movie_list';
import {StackNavigator} from 'react-navigation';
const ModalStack = StackNavigator({
    movieList: {
        screen: movieList,
        navigationOptions: {
            headerTitle: '电影',
        }
    }
}, {
    initialRouteParams: {
        type: '电影'
    }
});
module.exports=ModalStack;
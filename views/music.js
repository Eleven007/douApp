import musicList from './music/music_list';
import {StackNavigator} from 'react-navigation';
const ModalStack = StackNavigator({
    musicList: {
        screen: musicList,
        navigationOptions: {
            headerTitle: '音乐',
        }
    }
}, {
    initialRouteParams: {
        type: '音乐'
    }
});
module.exports=ModalStack;
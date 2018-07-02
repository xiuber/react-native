/**
 * Created by zhouxiangbo on 2018/6/19.
 * description:
 */
import { StackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Detail from './pages/Detail';

const MyApp =StackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail},
}
);

export  default  MyApp;
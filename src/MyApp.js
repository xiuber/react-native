/**
 * Created by zhouxiangbo on 2018/6/19.
 * description:
 */
import { StackNavigator ,TabNavigator } from 'react-navigation';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Cinemas from './pages/Cinemas';
import MyMovies from './pages/MyMovies';
import TabBarItem from './components/TabBarItem';

const MyTab =TabNavigator({
    Home:{
        screen:Home,
        // navigationOptions:{
        //     tabBarLabel:'Home',
        //     tabBarIcon:({tintColor,focused})=>{
        //
        //     }
        // }
    },
    Cinemas:{screen:Cinemas},
    MyMovies:{screen:MyMovies}
},{
    tabBarPosition:'bottom',//下方对齐
    tabBarOptions: {
        lazy: true,//是否懒加载
        activeTintColor: '#0390EB',
        inactiveTintColor: 'gray',
        labelStyle:{
            fontSize:20,
        },
        showIcon: true
        // style:{
        //     backgroundColor:'blue',
        // }
    },
});

const MyApp =StackNavigator({
    MyTab:{screen:MyTab},
    Detail:{screen:Detail},
});


export  default  MyApp;
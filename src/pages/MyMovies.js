/**
 * Created by zhouxiangbo on 2018/6/22.
 * description:
 */
/**
 * Created by zhouxiangbo on 2018/6/19.
 * description:
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';

export  default class MyMovies extends Component{
    static navigationOptions = {
        title:'我的电影'
    };
    render(){
        const { state} =this.props.navigation;
        return(
            <View>
                <Text>我的电影</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    goBack:{color:"red",fontSize:20,textAlign:"center"},
    goBackParam:{color:"green",fontSize:20,textAlign:"center",marginTop:20},
});
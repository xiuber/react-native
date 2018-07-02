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

export  default class Detail extends Component{
    render(){
        const { state} =this.props.navigation;
        return(
            <View>
                <Text>id:{state.params.id}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    goBack:{color:"red",fontSize:20,textAlign:"center"},
    goBackParam:{color:"green",fontSize:20,textAlign:"center",marginTop:20},
});
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

import Swiper from '../components/Swiper';
import FetchNtils from '../utils/fetchNtils';
import {dataHostUrl} from '../utils/config';


export  default class Home extends Component{
    static navigationOptions = {
        header:null
    };
    state = {
        data:[""],
        navigation:this.props.navigation
    };
    fetchData=()=>{
        var url=dataHostUrl+'youde/f/app/s_10020/advertising/list?type=1';
        FetchNtils.get(url,(res)=>{
            console.log(res);
            if(res.statusCode=="200" && res.status=="success"){
                this.setState({
                    data:res.data
                });
            }else{
                console.log(res);
            }
        });
    }



    componentDidMount(){//数据操作
        this.fetchData();
    }


    render(){
        const {data,navigation} =this.state;
        return(
            <View>
                <Swiper data={data} navigation={navigation}/>
            </View>
        );


    }
}



const styles=StyleSheet.create({

});
/**
 * Created by zhouxiangbo on 2018/6/25.
 * description:
 */
'use strict';
import React,{Component,PureComponent} from 'react';
import {
    Text,
    View,
    Dimensions,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import Carousel from 'react-native-looped-carousel';



// 屏幕宽度
const { width, height } = Dimensions.get('window');

export  default class Swiper extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            size: { width, height },
            data:this.props.data,
            imgData:[],
            navigate:this.props.navigation.navigate
        };
    }


    componentWillReceiveProps(nextProps) {
        console.log("打印nextProps");
        console.log(nextProps)
        this.setState({
            data: nextProps.data,
        });
    }

    render(){
        const {data,navigate} =this.state;
        return (
                <Carousel
                    delay={1500}
                    style={{width:this.state.size.width, height: 200}}
                    autoplay
                    pageInfo
                >
                        {data.map((value,i)=>{
                            return(
                                <TouchableOpacity style={[{ backgroundColor: '#BADA55' }, this.state.size]}
                                onPress={()=>navigate('Detail',{id:i})}
                             >
                                    <Text>{i}</Text>
                                </TouchableOpacity>
                            )
                        })}
                </Carousel>
        );
    }

}

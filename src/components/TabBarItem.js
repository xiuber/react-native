/**
 * Created by zhouxiangbo on 2018/7/6.
 * description:
 */
import React,{Component} from 'react';
import { Image } from 'react-native';

const TabBarItem = ({focused, tintColor, selectedImage, normalImage}) => {
    return (
        <Image
            source = {focused ? selectedImage : normalImage}
            style={{ tintColor: tintColor, width: 25, height: 25 }}/>
    )
}

export default TabBarItem;
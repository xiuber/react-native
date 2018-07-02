/**
 * Created by zhouxiangbo on 2018/7/2.
 * description:数据请求
 */

import React,{ Component } from 'react';

export default class FetchNtils extends Component{
    //构造函数，默认的props，以及state 都可以在这里初始化了
    constructor(props){
        super(props);
    }

    /**
     * 普通的get请求
     * @param {*} url 地址
     * @param {*} params  参数
     * @param {*} callback  成功后的回调
     */

    static get(url,callback){
        fetch(url,{
            method:'GET',
        })
        .then((response)=>{
            return response.json();
        })
        .then((json) => {
            callback(json);
        })
        .catch((error) => {
            callback(error);
        });
    }

    /**
     * post key-value 形式 hader为'Content-Type': 'application/x-www-form-urlencoded'
     * @param {*} url
     * @param {*} params
     * @param {*} callback
     */

    static post(url,params,callpack){
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'//body参数需要为key-value形式
            },
            body:params
        })
        .then((response)=>{
            return response.json();
        })
        .then((json) => {
            callback(json);
        })
        .catch((error) => {
            callback(error);
        });
    }

    /**
     * post json形式  header为'Content-Type': 'application/json'
     * @param {*} url
     * @param {*} paramsJson
     * @param {*} callback
     */

    static  postJson(url,paramsJson,callback){
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body:JSON.stringify(paramsJson) //json对象转换为string
        })
        .then((response)=>{
            return response.json();
        })
        .then((json) => {
            callback(json);
        })
        .catch((error) => {
            callback(error);
        });
    }







}

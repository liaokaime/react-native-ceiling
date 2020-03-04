/**
 * 多个组件选择性展示一个
 * Create by liaokai on 2020-03-03 11:58:09
 */
import React, {Component} from 'react';
import {View} from "react-native";
import {DisplayView} from "./display-view";

interface IProps{
    views : JSX.Element[]      //包含多个组件的数组
    showIndex : number         //当前展示的组件下标
}

interface IState{

}

export class DisplayMultiView extends Component<IProps,IState>{
    //state初始化
    readonly state : IState = {

    };
    constructor(props: IProps){
        super(props);
    }
    render() {
        let {views,showIndex} = this.props;
        let {} = this.state;
        return (
            <>
                {views.map((value, index) => {
                    return <DisplayView ifIs={showIndex === index} show={value} elseShow={<View/>} justHide={true}/>;
                })}
            </>
        );
    }
}

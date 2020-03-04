/**
 * 选择性展示
 * Create by liaokai on 2020-02-11 21:20:28
 */
import React, {Component} from 'react';
import {View} from "react-native";

interface IProps{
    ifIs : any,                 //正确条件
    show : JSX.Element,         //为真展示内容
    elseShow : JSX.Element,     //为假展示内容
    justHide? : boolean         //仅隐藏性切换
}

interface IState{

}

export class DisplayView extends Component<IProps,IState>{
    //state初始化
    readonly state : IState = {
    };

    constructor(props: IProps){
        super(props);
    }
    render() {
        let {ifIs,elseShow,show,justHide} = this.props;
        let {} = this.state;
        if(!justHide){
            return ifIs ? show : elseShow;
        }
        return (
            <>
                <View style={[{overflow : "hidden"},{height : ifIs ? "auto" : 0}]}>{show}</View>
                <View style={[{overflow : "hidden"},{height : !ifIs ? "auto" : 0}]}>{elseShow}</View>
            </>
        );
    }
}

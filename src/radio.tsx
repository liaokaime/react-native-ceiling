/**
 * 单选
 *  不指定extractKey时，默认使用item的序列化字符串
 *  点击已选中的item时，不触发选中事件
 * Create by liaokai on 2020-03-04 17:54:20
 */

import React, {Component} from 'react';
import {TouchableOpacity, View} from "react-native";

type tStateData<T> = {
    data : T,
    selected : boolean,
}

interface IProps<T>{
    data : T[],                                         //数据（选择列表）
    renderUnSelectItem: (item : T) => JSX.Element,      //渲染未选中组件
    renderSelectedItem: (item : T) => JSX.Element,      //渲染已选中组件
    onSelect?: (item : T, index : number) => void,      //选中事件
    initSelectIndex? : number,                          //默认选中下标
    extractKey? : (item : T) => string,                 //从item中提取值作为key
}

interface IState<T>{
    data : tStateData<T>[]
}

export class Radio<T> extends Component<IProps<T>,IState<T>>{
    constructor(props: IProps<T>){
        super(props);
    }

    //从props.data转换为state.data
    propsData2StateData = (data : T[], initSelectIndex? : number) : tStateData<T>[] => {
        return data.map((value, index) => {
            return {
                data : value,
                selected : initSelectIndex === index
            }
        })
    };

    //state初始化
    readonly state : IState<T> = {
        data : this.propsData2StateData(this.props.data, this.props.initSelectIndex)
    };

    /**重置**/
     public reset(){
        this.setState({
            data: this.propsData2StateData(this.props.data)
        })
    }

    /**选择**/
    public select(index : number){
        this.setState({
            data: this.propsData2StateData(this.props.data, index)
        })
    }

    componentWillReceiveProps(nextProps: Readonly<IProps<T>>, nextContext: any): void {
        this.setState({
            data: this.propsData2StateData(nextProps.data, nextProps.initSelectIndex)
        })
    }

    render() {
        let {renderSelectedItem,renderUnSelectItem,onSelect,extractKey} = this.props;
        let {data} = this.state;
        return (
            <>
                {
                    data.map((value, index) => {
                        if(value.selected){
                            return <View key={extractKey?.(value.data) ?? JSON.stringify(value.data)}>
                                renderSelectedItem(value.data)
                            </View>
                        }else{
                            return <TouchableOpacity key={extractKey?.(value.data) ?? JSON.stringify(value.data)} onPress={()=>{
                                let nextData : tStateData<T>[] = data.map((value1, index1) => {
                                    return {
                                        data : value1.data,
                                        selected : index1 === index
                                    }
                                });
                                onSelect?.(value.data, index);
                                setTimeout(()=>{
                                    this.setState({
                                        data : nextData
                                    });
                                },0)
                            }}>
                                {renderUnSelectItem(value.data)}
                            </TouchableOpacity>
                        }
                    })
                }
            </>
        );
    }
}

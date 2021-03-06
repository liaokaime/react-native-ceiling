/**
 * 吸顶组件
 *   传入views数组中，如有包含多个list组件时，请使用listKey
 * Create by liaokai on 2020-03-02 11:05:01
 */
import React, {Component} from 'react';
import {SectionList} from "react-native";
import {DisplayMultiView} from "./display-multi-view";

interface ITab {
    onSwitch : (page: number) => void
}

interface IProps{
    TabsClass : new(props : ITab) => Component<ITab>        //tabs组件Class，该Class必须传入props.onSwitch回调，调用即可切换"待切换页面[]"
    views : JSX.Element[]                                   //待切换页面[]，onSwitch的page即该数组的下标
    ListHeaderComponent : JSX.Element                       //首部内容
}

interface IState{
    tabIndex : number
}

export class Ceiling extends Component<IProps,IState>{
    //state初始化
    readonly state : IState = {
        tabIndex : 0
    };
    constructor(props: IProps){
        super(props);
    }
    render() {
        let {TabsClass, views, ListHeaderComponent} = this.props;
        return (
            <SectionList
                ListHeaderComponent={ListHeaderComponent}
                stickySectionHeadersEnabled={true}
                renderSectionHeader={({section})=> (
                    <TabsClass onSwitch={page => {
                        this.setState({tabIndex : page})
                    }}/>
                )}
                renderItem={({item,index})=>{
                    return <DisplayMultiView showIndex={this.state.tabIndex} views={views}/>
                }}
                sections={[{data : [""]}]}
                keyExtractor={item => "fixedKey"}
            />
        );
    }
}

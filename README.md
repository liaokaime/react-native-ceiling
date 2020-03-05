
# react-native-ceiling

## 安装

`$ npm install react-native-ceiling --save`


## Usage

![image](./sample.gif)

```typescript jsx
import {Ceiling,Radio} from 'react-native-ceiling';

<Ceiling
    ListHeaderComponent={
      <View style={styles.header}>
        <Text>首部内容</Text>
      </View>
    }
    TabsClass={
      // 该Class实例化的Element，需支持必要props项: onSwitch函数，调用即可切换为相应下标的待切换页面
      class extends Component<{
        onSwitch: (page: number) => void
      }> {
        render() {
          return (
              <View style={styles.tabs}>
                <Radio
                    data={["普通内容A","列表B","列表C"]}
                    initSelectIndex={0}
                    renderSelectedItem={item => <Text style={styles.tabSelected}>{item}</Text>}
                    renderUnSelectItem={item => <Text style={styles.tabUnselect}>{item}</Text>}
                    onSelect={(item, index) => {
                      this.props.onSwitch(index);
                    }}
                    extractKey={item => item}
                />
              </View>
          );
        }
      }
    }
    views={[

      <View style={styles.normalContentC}>
        <Text>普通内容A</Text>
      </View>
      ,
      <FlatList
          listKey={"list1"}
          data={
            Array(100).fill().map((value, index) => `列表B - 第${index+1}行`)
          }
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={item => item}
      />
      ,
      <FlatList
          listKey={"list2"}
          data={
            Array(150).fill().map((value, index) => `列表C - 第${index+1}行`)
          }
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={item => item}
      />
    ]}
>
</Ceiling>

```

## 组件文档

### Ceiling

|参数|类型|必要|作用|
|:---:|:---:|---|---|
|ListHeaderComponent|JSX.Element|是|首部内容组件|
|TabsClass|Component<{ onSwitch : (page:number)=>void }>|是|Tab栏组件类|
|views|JSX.Element[]|是|onSwitch的page即该数组的下标|


### Radio

|参数|类型|必要|作用|
|:---:|:---:|---|---|
|data|T[]|是|选项数据|
|renderSelectedItem|JSX.Element|是|选中展示|
|renderUnSelectItem|JSX.Element|是|未选中展示|
|initSelectIndex|number|否|默认选择下标|
|onSelect|(item: T, index: number) => void|否|选中回调|
|extractKey|(item: T) => string|否|提取key值|


# License
The files included in this repository are licensed under the MIT license.

import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const testIdolData = [
  {nameEn: 'IVE', nameKo: '아이브'},
  {nameEn: 'BTS', nameKo: '방탄소년단'},
  {nameEn: 'BlackPink', nameKo: '블랙핑크'},
  {nameEn: 'NCT', nameKo: 'NCT'},
  {nameEn: 'G-Idle', nameKo: '(여자)아이들'},
  {nameEn: 'G-Idle2', nameKo: '(여자)아이들'},
  {nameEn: 'G-Idle3', nameKo: '(여자)아이들'},
  {nameEn: 'G-Idle4', nameKo: '(여자)아이들'},
  {nameEn: 'G-Idle5', nameKo: '(여자)아이들'},
  {nameEn: 'G-Idle6', nameKo: '(여자)아이들'},
]

const filterStack = createStackNavigator();

const IdolComponent = ({ info, length, test }) => {
  return (
    <View 
      style={{
        width: length,
        height: 200,
        alignItems: 'center',
    }}>
      <View
        style={{
          width: length - 20,
          height: length - 20,
          borderRadius: length / 2,
          backgroundColor: '#cdcdcd',
          justifyContent: 'center',
          alignItems: 'center',
        }} 
      >
        <Text>{info.nameEn}</Text>
      </View>
      <Text>{info.nameKo}</Text>
    </View>
  ) 
}

export default function App() {
  // return (
  //   <View>
  //     <Text>test text</Text>
  //   </View>
  // )
  const [containerWidth, setContainerWidth] = useState(0);
  const marginBetween = 20;
  const columnNum = 2;
  
  return (
    <View>
      <FlatList
        // ListHeaderComponent={}
        data={testIdolData}
        horizontal={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        keyExtractor={(item, index) => String(item.nameEn)} 
        renderItem={({item}) => (
          <IdolComponent info={item} length={(containerWidth - marginBetween) / columnNum} test={containerWidth}/>
        )}
        numColumns={2}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
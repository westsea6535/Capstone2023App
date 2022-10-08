import { Text, TextInput, View, Image, ScrollView, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import testData from '../test/testData';


const Goods = ({ item, width }) => {
  return (
    <View 
      style={{
        width, 
        height: 200,
        alignItems: 'center',
      }}>
      <Image 
        source={{uri: item.img}} 
        style={{
          width: width - 5,
          height: width - 5,
          borderRadius: 5,
        }}>
      </Image>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.id}</Text>
      </View>
    </View>
  )
}

const HomeScreen = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const marginBetween = 20;
  const columnNum = 2;
  // changing key value by condition must be added to change columnNUm 


  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <FlatList
          ListHeaderComponent={
            <View>
              <TextInput></TextInput>
              <Text style={{fontSize: 20,}}>어서오세요</Text>
              <ScrollView
                horizontal={true}
                style={{
                  // width: containerWidth,
                  // height: 200,
                  marginVertical: 50, 
                }} 
                snapToAlignment={'center'}
                snapToInterval={containerWidth}
                decelerationRate={100}
              >
                <View style={{
                  backgroundColor: 'blue', 
                  width: containerWidth,
                  height: 150,
                }}/>  
                <View style={{
                  backgroundColor: 'red', 
                  width: containerWidth,
                  height: 150,
                }}/>  
                <View style={{
                  backgroundColor: 'blue', 
                  width: containerWidth,
                  height: 150,
                }}/>  
                <View style={{
                  backgroundColor: 'red', 
                  width: containerWidth,
                  height: 150,
                }}/>  
                <View style={{
                  backgroundColor: 'blue', 
                  width: containerWidth,
                  height: 150,
                }}/>  
              </ScrollView>
            </View>
          }
          data={testData}
          horizontal={false}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingHorizontal: 10,
          }}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          keyExtractor={(item, index) => String(item.id)} 
          renderItem={({item}) => (
            <Goods item={item} 
              width={(containerWidth - marginBetween) / columnNum}
            />)}
          numColumns={columnNum}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  goods: {
    flex: 1,
    borderWidth: 5,
  },
  test1: {
  }
})

export default HomeScreen;
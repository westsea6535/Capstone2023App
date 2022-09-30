import { Text, TextInput, View, Image, ScrollView, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import testData from '../test/testData';


const renderItem = ({ item }) => {
  return (
    <View style={{backgroundColor: '#f9c2ff', flex: 1, width: 200, height: 200, marginBottom: 20}}>
      <Image 
        source={{uri: item.img}} 
        style={styles.image}></Image>
      <Text>{item.img}</Text>
      <Text>{item.title}</Text>
    </View>
  )
}
const HomeScreen = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(testData);
  // }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1,}}>
        <TextInput></TextInput>
        <Text>This is Home</Text>
        <Text>{testData.length}</Text>
        <Text>{testData[1].title}</Text>
      </View>
      <FlatList
        data={testData}
        keyExtractor={(item, index) => String(item.id)} 
        renderItem={renderItem}
        
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goods: {
    flex: 1,
    borderWidth: 5,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  }
})

export default HomeScreen;
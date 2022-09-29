import { Text, TextInput, View, Image, ScrollView, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import testData from '../test/testData';


const GoodsItem = (data) => {
  return (
    <View style={{backgroundColor: '#f9c2ff', flex: 1, width: 20, height: 20,}}>
      {/* <Image source={data.img} style={styles.image}></Image>
      <Text>{data.img}</Text>
      <Text>{data.title}</Text> */}
      <Text style={{flex: 1}}>hello</Text>
    </View>
  )
}
const HomeScreen = () => {
  // const renderItem = ({ item }) => (
  //   <GoodsItem data={item}/>
  // );
  return (
    <View style={{flex:1}}>
      <FlatList
        sections={testData}
        keyExtractor={(item, index) => item.id} 
        renderItem={({item}) => <GoodsItem data={item}/>}
        ListHeaderComponent={() => (
          <View style={{flex: 1,}}>
            <TextInput></TextInput>
            <Text>This is Home</Text>
            <Text>{testData.length}</Text>
          </View>
        )}
      />
    </View>
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

  }
})

export default HomeScreen;
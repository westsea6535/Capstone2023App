import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

const renderItem = ({ item }) => {
  return (
    <View>
      <View>
        <Text>user id: {item.userId}</Text>
      </View>
      <View>
        <Text>id: {item.id}</Text>
      </View>
      <View>
        <Text>title: {item.title}</Text>
      </View>
      <View>
        <Text>body: {item.body}</Text>
      </View>
    </View>
  );
};

const LIMIT = 11;

export default function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res))
  };

  useEffect(() => {
    getData();
  }, []);

  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
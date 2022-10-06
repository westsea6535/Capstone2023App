import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";


export default function App() {
  const [data, setData] = useState([]);



  
  return (
    <View>
      <Text>This is filter div</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
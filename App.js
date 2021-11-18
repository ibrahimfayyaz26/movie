import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const fetchData = async () => {
  const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d8d293e2494faf7063c034a04330cacb")
  const data = JSON.stringify(res.data,null,2)
  console.log(data)
}

const App = () => {
 fetchData()
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;

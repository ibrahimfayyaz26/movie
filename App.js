import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {popularMovies,popularTv,upcomingMovies} from './services/api'

const App = () => {
  const [movies, setMovies] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    popularMovies().then(m=>setMovies(m)).catch(e=>setError(e));
    // console.log(movies)
  }, [])

  return (
    <View style={styles.container}>
      <Text>Movie: {movies[0].original_title}</Text>
      <Text>Language: {movies[0].original_language}</Text>
      <Text>Date: {movies[0].release_date}</Text>
      {error && <Text style={{color:"red"}} >Error: Server error</Text>}
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

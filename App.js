import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {popularMovies,popularTv,upcomingMovies} from './services/api'

const App = () => {
  const [movies, setMovies] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    popularMovies()
    .then(m=>{setMovies(m[0])})
    .catch(e=>{setError(e)});
    return ()=>{
      setMovies("");
      setError(false)
    }
  }, [])

  // console.log(movies)
if(movies){
  return (
    <View style={styles.container}>
      <Text>Movie: {movies.original_title}</Text>
      <Text>Language: {movies.original_language}</Text>
      <Text>Date: {movies.release_date}</Text>
      {error && <Text style={{color:"red"}} >Error: Server error</Text>}
    </View>
  );
}else{
  return null
}
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

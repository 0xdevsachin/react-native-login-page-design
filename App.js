import React from "react";

import { Text, View, StyleSheet, ImageBackground } from "react-native";

import bgImage from './assets/images/bg.jpeg'
import LoginBox from "./src/LoginBox";
const App = () =>{
  return(
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image} >
        <LoginBox />
      </ImageBackground> 
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingTop : 280
  }, 
})
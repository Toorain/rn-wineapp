import {Image, StyleSheet} from "react-native";
import * as React from "react";

export default function Logo () {
  return(
    <Image
      style={styles.logo}
      source={require('../assets/images/winelogo.png')}
    />
  )
}

const styles = StyleSheet.create({
  logo: {
   /* position: 'relative',
    top: 150,*/
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
    marginBottom: 50
  }
});

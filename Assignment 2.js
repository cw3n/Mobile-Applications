import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
const CatApp = () => {
const image = { uri: "https://www.macmillandictionary.com/external/slideshow/full/White_full.png" };
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"

  }
});
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{uri: "https://lh3.googleusercontent.com/q-sjeBJ0LvtIvgdZvWNsGDziqTF0gbFdqVaduDWIAIcrsnCZLIZWUYYbSJJz7JyDF7sWpdmqpN1dv4xG1B9KilmqkRZiWVcWZBObq99yytcHt_SILwHVzQDvfcRZaUm0ctefQP2sNEdLY_CNTUZlR86zoIemWT40ke025IHad6-JBc2v6-S6B7Hd7CdjLNJHjC6KQJC8H59rHORYp1RE03D3Z101LjkM-7IOJKt2bQUoM43o1YR8paAxOc7lDBzFbq1YRLxjabFK94OAM_sT0DX5JbgjynX3Yeo8--bQ6-QSoVZqTX9pI-EwZONcZ9rtctCSBTi-9a1Ou-39xrLL1x96UrV58UOfTxyJpD8kKb4uFbFPgOPyM5z5hGW_m7LV-eDIf-zyEwrMsr6jmGpjs1u41U6gnFNqEEG4bOABZsE8ItUsBM3Uo1n-HRCOZMBKG7nPxV7OfFnSNAdR9cbk4NfcNZaRKhghmhYIRae0BNZR022C4r5fG9-cadKR_tPXbFUHTjcGlKiB9V61A6LbKOwtE8hWHI6UgxU0TOmAmUCmGR3A7zJBlH7tCq2AmL7DC4QBWf6QF9_I4Fp2cUlGPsvm0MoVZf32sbcNyvpjZ_2q4WKaL4RwFgx_swzSw960mEMM9pW5kaKEgNI-me8x1HdpoQutqMNwdN44VDc6pwyfp_otK1zYuZPZooVY_LuecjykyQMaDZqhcjWmO3UyMCteOQ=w984-h738-no?authuser=0"}}
        style={{width: 400, height: 300}}
      />
      <Text>Is Kitty cat!</Text>
    </View>
  );
}
export default CatApp;

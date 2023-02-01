import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
    logo: {
    width: 400,
    height: 300,
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Close Up"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 1')}
      />
       <Button
        title="Sleepy Time"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 2')}
      />
      <Button
        title="Big Boss"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 3')}
      /><Button
        title="Lazy day"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 4')}
      /><Button
        title="Belly Rub"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 5')}
      /><Button
        title="Day on The Couch"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 6')}
      /><Button
        title="The 🍐"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 7')}
      /><Button
        title="Sphinx"
        color="#ff694f"
        onPress={() => navigation.navigate('Photo 8')}
      />
    </View>
  );
}
function Photo1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/5KySkrR/8-E76-FC3-E-402-E-4-CC1-A417-59-B2-D5438144.jpg',
        }}
      />
    </View>
  );
}
function Photo2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/Jx59Kd4/84-A7-A83-E-E407-4-A57-AF6-B-ADC18-E6-E055-E.jpg',
        }}
      />
    </View>
  );
}
function Photo3() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/sF193Wm/31-FFDDD1-4-B65-4371-9-C5-F-9564890-B900-D.jpg',
        }}
      />
    </View>
  );
}function Photo4() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/vHxcc6y/C82-D64-E5-9287-4485-B0-D3-9-E2912-B31685-1-201-a.jpg',
        }}
      />
    </View>
  );
}function Photo5() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/9sHR3q8/70-CDE49-E-6-E75-4-BFC-81-F1-B8733811-FD46-1-201-a.jpg',
        }}
      />
    </View>
  );
}function Photo6() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/NY2XFtB/0-CFB4-E0-A-254-C-476-F-A6-A8-4313-D43-EE9-E9.jpg',
        }}
      />
    </View>
  );
}function Photo7() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/LtJ3HcB/4-F6-FCBC4-9-E9-C-4828-ABB3-A3-BD4-E58-DED8-1-201-a.jpg',
        }}
      />
    </View>
  );
}function Photo8() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ibb.co/Z81TM7j/FAAA4-A0-F-A8-B9-46-DA-8-F1-F-FB605-A88976-C-1-201-a.jpg',
        }}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Photo 1" component={Photo1} />
        <Stack.Screen name="Photo 2" component={Photo2} />
        <Stack.Screen name="Photo 3" component={Photo3} />
        <Stack.Screen name="Photo 4" component={Photo4} />
        <Stack.Screen name="Photo 5" component={Photo5} />
        <Stack.Screen name="Photo 6" component={Photo6} />
        <Stack.Screen name="Photo 7" component={Photo7} />
        <Stack.Screen name="Photo 8" component={Photo8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

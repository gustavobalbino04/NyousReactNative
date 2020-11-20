import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './pages/Login';
import Home from './pages/Home';

const Autenticado = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Logout" component={Logout} />
  </Drawer.Navigator>
  )
}

const Logout = ({navigation}) => {
  return(
    <View style={styles.container}>
       <Text>Deseja realmente sair do Nyous?</Text>
       <Button onPress={() => {
        AsyncStorage.removeItem('@jwt');
        navigation.push('Login');
      }} title="Sair">Sair</Button>
    </View>
  )

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Autenticado" component={Autenticado}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3b3b3b',
    width: '50%',
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

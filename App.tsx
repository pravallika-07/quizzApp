import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Auth/Home';
import SetTimer from './src/Screens/Auth/SetTimer';
import Quiz from './src/Screens/Auth/Quiz';
import TimeUp from './src/Screens/Auth/TimeUp';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SetTimer" component={SetTimer} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="TimeUp" component={TimeUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light} >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Dashboard'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Dashboard" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};


export default App;

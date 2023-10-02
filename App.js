import React, { Component } from 'react'
import {
  IView,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Botton,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screenprocess from './Screens/Screenprocess';
import Front from './Screens/Front';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
    
        <Stack.Screen name="Home" component={Home} /> 
         {/* <Stack.Screen name="Screenprocess" component={Screenprocess} /> */}
         

      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}






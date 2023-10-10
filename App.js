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
import Uploadimg from './Screens/Uploadimg';
import Giftmassage from './Screens/Giftmassage';
import Preview from './Screens/Preview';
import ChooseGift from './Screens/ChooseGift';
import ChooseMassege from './Screens/ChooseMassege';
import ChooseFairy from './Screens/ChooseFairy';

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
         <Stack.Screen name="Uploadimg" component={Uploadimg} />
         <Stack.Screen name="Giftmassage" component={Giftmassage} />
         <Stack.Screen name="Preview" component={Preview} />
         <Stack.Screen name="ChooseGift" component={ChooseGift} />
         <Stack.Screen name="ChooseMassege" component={ChooseMassege} />
         <Stack.Screen name="ChooseFairy" component={ChooseFairy} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}






import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const DimensionsHeight = Dimensions.get('screen').height;
const DimensionsWidth = Dimensions.get('screen').width;

export default class Uploadimg extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFFFFF', height: '100%', justifyContent: 'space-evenly' }}>
        <View>
          <View style={{ marginLeft: 25 ,marginTop:20}}>
            <Text style={{ color: '#2ADB7F', marginTop: 20, fontSize: 24, fontWeight: '900', fontFamily: 'Poppins' }}>
              Meet,
            </Text>
            <Text style={{ color: '#000000', fontSize: 25, fontWeight: '800', fontFamily: 'Poppins' }}>
              The Sleep Fairy
            </Text>
          </View>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36%' ,marginTop: 20,}}>
            <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 35 }}>Take or choose a picture</Text>
            <Text style={{ fontSize: 19, fontWeight: '600' }}>of your sleeping child</Text>
          </View>
          <View style={{ marginLeft: 20, display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '90%', flexDirection: 'row' }}>
            <View style={{ width: '25%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 85, backgroundColor: '#3DE17B' }}>
              <Image source={require('../Images/Vector(2).png')} />
            </View>
            <View style={{ width: '25%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 85, backgroundColor: '#3DE17B' }}>
              <Image source={require('../Images/ph_folder-light.png')} />
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
            <Text style={{ width: 85, fontWeight: '700', marginLeft: 30, fontSize: 18 }}>Take a Picture</Text>
            <Text style={{ width: 85, fontSize: 18, fontWeight: '500' }}>Choose a Picture</Text>
          </View>
          <View style={{ width: '77%', textAlign: 'center', alignSelf: 'center', display: 'flex', marginTop: 60, height: 60, backgroundColor: '#3DE17B0D', borderRadius: 10 }}>
            <Text style={{ alignSelf: 'center', alignItems: 'center', marginTop: 5, width: '90%', alignContent: 'center', textAlign: 'center', borderRadius: 10, height: 60 }}>
              After taking a picture, you will be able to place the sleep fairy avatar on the picture
            </Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderWidth: 2, borderColor: '#BABABA', borderRadius: 40, borderStyle: 'solid', height: 80, alignItems: 'center', width: '97%', marginLeft: 7, }}>
          <Image source={require('../Images/home.png')} />
          <Image source={require('../Images/carbon_book.png')} />
          <Image source={require('../Images/Group.png')} />
          <Image source={require('../Images/Vector(4).png')} />
          <Image style={{ width: 27, height: 27 }} source={require('../Images/icons8-faq-50.png')} />
        </View>
      </View>
    );
  }
}

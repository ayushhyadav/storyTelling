import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DimensionsHeight = Dimensions.get('screen').height;
const DimensionsWidth = Dimensions.get('screen').width;

export default class Preview extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#30DC7E', '#91FB67']} // Define your gradient colors
        style={{ flex: 1 }} // Make sure the gradient fills the entire screen
      >
        <ImageBackground style={{ height: '100%', justifyContent: 'space-evenly' }} source={require('../Images/homepage.png')}>
          <View>
            <View style={{ marginLeft: 25, marginTop: 20 }}>
              <Text style={{ color: '#2ADB7F', fontSize: 28, fontWeight: '900', fontFamily: 'Poppins' }}>
                Gift,
              </Text>
              <Text style={{ color: '#000000', fontSize: 28, fontWeight: '800', fontFamily: 'Poppins' }}>
                & Messages
              </Text>
            </View>
            <View style={{ alignSelf: 'center', borderRadius: 15, height: 260, width: '90%', justifyContent: 'center', borderWidth: 3, borderColor: '#3DE17B', marginTop: 30 }}>
              <Text style={{ marginTop: -35, marginLeft: 20, fontSize: 20, fontWeight: '700', color: "#AFAFAF" }}>
                Preview
              </Text>
              <View style={{ alignItems: 'center' }}>
                <Image style={{ alignItems: "center", width: 110, marginTop: -10 }} source={require('../Images/giftbold.png')} />
                <Text style={{ fontSize: 27, fontWeight: '800', color: '#3DE17B' }}>
                  Well Done SIA !!
                </Text>
                <Text style={{ fontSize: 20, color: '#8B8B8B', }}>
                  You slept through the Night.
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, color: '#8B8B8B' }}>
                    I am proud of you
                  </Text>
                  <Image style={{ marginTop: 5, marginLeft: 5 }} source={require('../Images/bxs_smile.png')} />
                </View>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 30 }}>
              <View style={{ backgroundColor: '#D9D9D9', width: 60, borderRadius: 15, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../Images/mdi_gift-outline.png')} />
              </View>
              <Text onPress={() => this.props.navigation.navigate('ChooseGift')} style={{ padding: 20, fontSize: 20, color: 'black', fontWeight: '500' }}>
                Choose a Gift
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 15 }}>
              <View style={{ backgroundColor: '#D9D9D9', width: 60, borderRadius: 15, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../Images/wpf_message-outline.png')} />
              </View>
              <Text style={{ padding: 16, fontSize: 20, color: 'black', fontWeight: '500' }}>
                Choose or Write Message
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 45, justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ flex: 1, }}>
              <LinearGradient
                colors={['#30DC7E', '#91FB67']} // Define your gradient colors
                style={{ flex: 1, borderRadius: 10 ,width:"90%" }} // Apply gradient to the button background
              >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}> Save</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#A0A0A0', width: '45%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}> Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderWidth: 2, borderColor: '#BABABA', borderRadius: 40, borderStyle: 'solid', height: 80, alignItems: 'center', width: '97%', marginLeft: 7 }}>
            <Image source={require('../Images/home.png')} />
            <Image source={require('../Images/carbon_book.png')} />
            <Image source={require('../Images/Group.png')} />
            <Image source={require('../Images/Vector(4).png')} />
            <Image style={{ width: 27, height: 27 }} source={require('../Images/icons8-faq-50.png')} />
          </View>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

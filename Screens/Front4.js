import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

export default class Front4 extends Component {
  render() {
    return (
      <ImageBackground style={{ height: this.props.height, alignItems: 'center', width: this.props.width, alignItems: 'center', marginTop: -12 }} source={require('../Images/splash(4).png')}>
        <View style={{ width: '80%', marginTop: 25, alignItems: 'flex-end' }}>
          <Text style={{ fontWeight: '800', fontSize: 17 }}>
            Skip
          </Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center', height: 365, marginRight: 25, marginTop: 30 }}>
          <Image style={{ marginTop: 50 }} source={require('../Images/Group(4).png')} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}>
          <Text style={{ fontSize: 33, fontWeight: "800", color: 'black' }}>
            Let’s here a
            <Text style={{ color: "#2ADB7F" }}> stories </Text>
          </Text>
          <Text style={{ fontSize: 31, fontWeight: "800", color: 'black', }}> from you</Text>
        </View>
        <View style={{ alignItems: 'center', height: 70, justifyContent: 'center', alignContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>
            Share and enjoy your interesting  </Text>
          <Text style={{ fontSize: 18 }}> stories with other people. </Text>
        </View>
        <TouchableOpacity style={{ borderRadius: 4, width: '85%', height: 45, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <LinearGradient // Use LinearGradient for the background
            colors={['#2ADB7F', '#9FFF64']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ borderRadius: 4, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Let Start</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* <Flatlist/> */}
      </ImageBackground>
    )
  }
}

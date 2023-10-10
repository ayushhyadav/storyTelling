import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';


const DimensionsHeight = Dimensions.get('screen').height;
const DimensionsWidth = Dimensions.get('screen').width;

export default class Giftmassage extends Component {


  render() {
    return (
      
      <ImageBackground style={{  height: '100%', justifyContent: 'space-evenly'  }} source={require('../Images/homepage.png')}>
        <View>
          <View style={{ marginLeft: 25, marginTop: 20 }}>
            <Text style={{ color: '#2ADB7F', marginTop: 20, fontSize: 28, fontWeight: '900', fontFamily: 'Poppins' }}>
            Gift,

            </Text>
            <Text style={{ color: '#000000', fontSize: 28, fontWeight: '800', fontFamily: 'Poppins' }}>
            & Messages
            </Text>
          </View>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36%', marginTop: 20 }}>
            <Text style={{ fontSize: 23, fontWeight: '500', marginTop: 35 ,textAlign:'center'}}>  Lorem ipsum dolor sit amet {'\n'}
consectetur. Lorem ipsum dolor sit
 </Text>
            <Text style={{ fontSize: 23, fontWeight: '500' }}>amet consectetur.</Text>
          </View>
         
            <View style={{ marginTop:25, display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', flexDirection: 'row',alignSelf:'center',alignContent:'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseMassege')} style={{width:'50%',alignItems:'center'}}>
                 
            <View style={{ width: '45%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 85, backgroundColor: '#3DE17B' }}>
            {/* <Text style={{color:'white',margin:4}}>+</Text>  */}
             <Image style={{width:15,height:15,marginLeft:30}} source={require('../Images/plus.png')} />
                <Image source={require('../Images/Vector(1).png')} />
                
              </View>
              </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Preview')} style={{width:'50%',alignItems:'center'}} >
              <View style={{ width: '45%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 85, backgroundColor: '#3DE17B' }}>
              <Image style={{width:15,height:15,marginLeft:30,}} source={require('../Images/eye.png')} />
                <Image source={require('../Images/Vector(1).png')} />
              </View>
              </TouchableOpacity>
            </View>
          
          <View style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
            <Text style={{width:'33%', fontWeight: '700', marginLeft: 20, fontSize: 22 ,color:'black'}}>Create Gifts
& Messages</Text>
            <Text style={{width:'33%', fontSize: 22, fontWeight: '500',color:'black' }}>Display Gifts
& Meaage</Text>
          </View>
          
        </View>
        <View style={{marginTop:90, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderWidth: 2, borderColor: '#BABABA', borderRadius: 40, borderStyle: 'solid', height: 80, alignItems: 'center', width: '97%', marginLeft: 7 }}>
          <Image source={require('../Images/home.png')} />
          <Image source={require('../Images/carbon_book.png')} />
          <Image source={require('../Images/Group.png')} />
          <Image source={require('../Images/Vector(4).png')} />
          <Image style={{ width: 27, height: 27 }} source={require('../Images/icons8-faq-50.png')} />
        </View>
      </ImageBackground>

    );
  }
}


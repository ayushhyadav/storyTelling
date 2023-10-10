import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DimensionsHeight = Dimensions.get('screen').height;
const DimensionsWidth = Dimensions.get('screen').width;

export default class ChooseFairy extends Component {
  render() {
    return (
    //   <LinearGradient
    //     colors={['#30DC7E', '#91FB67']} // Define your gradient colors
    //     style={{ flex: 1 }} // Make sure the gradient fills the entire screen
    //   >
        <ImageBackground style={{ height: '100%', justifyContent: 'space-evenly',backgroundColor:'white' }} >
          <View>
            
            <View style={{ alignSelf: 'center',  justifyContent: 'center', marginTop: 30 }}>
            <Image style={{width:354, borderWidth: 4, borderColor: '#3DE17B', }} source={require('../Images/Rectangle14(1).png')} />
            </View>
           <View>
            <Text style={{margin:10,fontSize:20,fontWeight:'700',color:'black',padding:10}}>
                Choose A Fairy
            </Text>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:10,}}>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:10}}source={require('../Images/Group(5).png')} />
            </View>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:13}}source={require('../Images/Group(6).png')} />
            </View>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:13}}source={require('../Images/Group(7).png')} />
            </View>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:13}}source={require('../Images/Group(8).png')} />
            </View>
          
            

          </View>

          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:10}}source={require('../Images/Group(5).png')} />
            </View>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:13}}source={require('../Images/Group(6).png')} />
            </View>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:13}}source={require('../Images/Group(7).png')} />
            </View>
            <View style={{width:'18%',alignItems:'center',borderRadius:90,height:75,alignContent:'center', backgroundColor:'#F2F2F2'}}>
            <Image style={{marginTop:13}}source={require('../Images/Group(8).png')} />
            </View>
          
            

          </View>
           </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 45, justifyContent: 'space-between' }}>
            {/* <TouchableOpacity style={{ flex: 1, }}>
              <LinearGradient
                colors={['#30DC7E', '#91FB67']} // Define your gradient colors
                style={{ flex: 1, borderRadius: 10 ,width:"90%" }} // Apply gradient to the button background
              >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}> Save</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity> */}
             <TouchableOpacity style={{ backgroundColor: '#A0A0A0', width: '47%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}> Save </Text>
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
    //   </LinearGradient>
    );
  }
}

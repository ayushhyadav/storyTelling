import React, { Component } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default class ChooseMassege extends Component {
  render() {
    return (
      
        <ImageBackground style={{ height: '100%', justifyContent: 'space-evenly' }} source={require('../Images/homepage.png')}>
          <View>
            <View style={{ marginLeft: 25, marginTop: 20 }}>
              <Text style={{ color: '#2ADB7F', fontSize: 28, fontWeight: '900', fontFamily: 'Poppins' }}>
               Choose
              </Text>
              <Text style={{ color: '#000000', fontSize: 28, fontWeight: '800', fontFamily: 'Poppins' }}>
              Gift
              </Text>
            </View>
            <Text style={{fontSize:19,color:'black',fontWeight:'bold',padding:20,marginTop:30}}>Choose Existing Gifts</Text>
            <View style={{ alignSelf: 'center', borderRadius: 15, height: 180, width: '90%',  borderWidth: 3, borderColor: '#3DE17B',justifyContent:'space-around' }}>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
             <View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
<View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
<View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
<View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
             </View>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
             <View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
<View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
<View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
<View style={{width:67,height:69,borderRadius:36,backgroundColor:'#43E279'}}>

</View>
             </View>
              
              </View>
              <Text style={{textAlign:'center',marginTop:15,color:'black',fontSize:18,fontWeight:'700'}}>OR</Text>
              <Text style={{textAlign:'center',marginTop:20,fontSize:23,fontWeight:'500'}}>Select a picture from libary</Text>

        
            <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 30,borderWidth:2 ,borderColor:'#3DE17B',height:90,borderRadius:10,}}>
          
              <TouchableOpacity style={{ backgroundColor: '#B8B8B8',marginTop:11,marginLeft:20, width: '20%', height: 65, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
              <Image style={{width:40,height:40}} source={require('../Images/ph_folder-light.png')} />
              </TouchableOpacity>
              <Text  style={{fontSize:20,color:'black',fontWeight:'600',marginTop:30,marginLeft:20}}> Choose a picture</Text>
            </View>
         <View style={{justifyContent:'flex-end',display:'flex',width:'50%',alignSelf:'flex-end',marginTop:17}}>
            <TouchableOpacity style={{ backgroundColor: '#A0A0A0', width: '90%', height: 55, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}> Next</Text>
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
     
    )
  }
}

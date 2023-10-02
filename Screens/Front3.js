import React, { Component } from 'react'
import { View,Text, ImageBackground,Image } from 'react-native'
import Flatlist from './Flatlist'

export default class Front3 extends Component {
  render() {
    return (
      <ImageBackground style={{height:this.props.height,alignItems:'center',width:this.props.width,alignItems:'center',marginTop:-12}} source={require('../Images/splash(3).png')}>
        <View style={{width:'80%',marginTop:25,alignItems:'flex-end'}}>
          <Text style={{fontWeight:'800',fontSize:17}}>
            Skip
          </Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',height:365,marginRight:25,marginTop:30}}>
        <Image style={{marginTop:50}} source={require('../Images/Group(3).png')} />
        </View>
        <View style={{justifyContent:'center',alignItems:'center', height:110}}>
          <Text style={{fontSize:33,fontWeight:"800",color:'black'}}>
          Let’s here a
          
           <Text style={{color:"#2ADB7F"}}> stories </Text>  
             
          </Text>
          <Text style={{fontSize:31,fontWeight:"800",color:'black',}}> from you</Text>
        </View>
        <View style={{alignItems:'center',height:80,justifyContent:'center',alignContent:'center'}}>
          <Text style={{fontSize:18}}>
          Share and enjoy your intrusting  </Text>
        <Text style={{fontSize:18}}> stories with other peoples. </Text> 
         
        </View>
        {/* <Flatlist/> */}
        
         </ImageBackground>
    )
  }
}

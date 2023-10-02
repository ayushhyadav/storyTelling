import React, { Component } from 'react'
import { View,Text, ImageBackground,Image } from 'react-native'

export default class Front extends Component {
  render() {
    return (
      <ImageBackground style={{height:this.props.height,alignItems:'center',width:this.props.width,marginTop:-11}} source={require('../Images/splash(1).png')}>
        <View style={{width:'80%',marginTop:25,alignItems:'flex-end'}}>
          <Text style={{fontWeight:'800',fontSize:17}}>
            Skip
          </Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',height:350,marginRight:25,marginTop:30}}>
        <Image style={{marginTop:50}} source={require('../Images/Group(1).png')} />
        </View>
        <View style={{justifyContent:'center',alignItems:'center', height:110}}>
          <Text style={{fontSize:33,fontWeight:"800",color:'black'}}>
          Let’s here a
          
           <Text style={{color:"#2ADB7F"}}> stories </Text>  
             
          </Text>
          <Text style={{fontSize:31,fontWeight:"800",color:'black',}}> from you</Text>
        </View>
        <View style={{alignItems:'center',height:80,justifyContent:'center',alignContent:'center',}}>
          <Text style={{fontSize:18}}>
          Share and enjoy your intrusting  </Text>
        <Text style={{fontSize:18}}> stories with other peoples. </Text> 
         
        </View>
        
        
         </ImageBackground>
    )
  }
}

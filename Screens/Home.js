import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, Dimensions,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
const DimensionsHight = Dimensions.get('screen').height
const DimensionsWidth = Dimensions.get('screen').width
export default class Home extends Component {
  render() {
    return (
      <ImageBackground style={{ height: this.props.height, width: this.props.width, height:"100%",}} source={require('../Images/homepage.png')}>
  <View style={{ marginTop:35}}>
          <View style={{ marginLeft:30}}>
            <Text style={{ color: '#2ADB7F',  fontSize: 32, fontWeight: '900', fontFamily: 'Poppins' }}>
              Mike,
            </Text>
            <Text style={{ color: '#000000', fontSize: 32, fontWeight: '900', }}>
              Welcome Back
            </Text>
          </View>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:35}}>
     
     <View style={{width:'45%'}}> 
       <Image style={{width:'100%',borderRadius:10,}} source={require('../Images/Rectangle5.png')} />
     <TouchableOpacity style={{position:'absolute',marginTop:140,backgroundColor:'white',width:120,textAlign:'center',height:35,alignItems:'center',alignSelf:'center',borderRadius:5,justifyContent:'center'}} > 
     <Text  style={{fontSize:18,fontWeight:'700',color:'black'}}>
      The Story
      </Text>
     </TouchableOpacity >
     </View> 
     <View style={{width:'45%',borderRadius:10,}}>
          <Image style={{width:'100%',borderRadius:10,}} source={require('../Images/fair.png')} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Uploadimg')} style={{position:'absolute',marginTop:140,backgroundColor:'#6EF06F',width:'90%',textAlign:'center',height:35,alignItems:'center',alignSelf:'center',borderRadius:5,justifyContent:'center'}} > 
     <Text  style={{fontSize:18,fontWeight:'600',color:'white'}}>
      Meet The Fairy
      </Text>
     </TouchableOpacity >
          </View>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
          <View style={{width:"45%",borderRadius:10}}>
          
          <Image style={{width:'100%',borderRadius:10,}} source={require('../Images/OBJECTS.png')} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Giftmassage')} style={{position:'absolute',marginTop:140,backgroundColor:'#6EF06F',width:'90%',textAlign:'center',height:35,alignItems:'center',alignSelf:'center',borderRadius:5,justifyContent:'center'}} > 
     <Text  style={{fontSize:18,fontWeight:'600',color:'white'}}>
      Gift & Messages
      </Text>
     </TouchableOpacity >
          </View>
         
         <View style={{width:"45%",borderRadius:10}}>
         
          <Image style={{width:'100%',borderRadius:10}}  source={require('../Images/Resources.png')} />
          <TouchableOpacity style={{position:'absolute',marginTop:140,backgroundColor:'white',width:'95%',textAlign:'center',height:35,alignItems:'center',alignSelf:'center',borderRadius:5,justifyContent:'center'}} > 
     <Text  style={{fontSize:20,fontWeight:'700',color:'black'}}>
      Resources & FAQs
      </Text>
     </TouchableOpacity >
          </View> 
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:40}}>
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


          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderWidth: 2, borderColor: '#BABABA', borderRadius: 40, borderStyle: 'solid', height: 80, alignItems: 'center', width: '97%', marginLeft: 7,marginTop:15 }}>
        <TouchableOpacity> 
           <Image source={require('../Images/home.png')} />
        </TouchableOpacity>
        <TouchableOpacity> 
          
          <Image source={require('../Images/carbon_book.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseFairy')}>
          <Image  source={require('../Images/Group.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('../Images/Vector(4).png')} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={{ width: 27, height: 27 }} source={require('../Images/icons8-faq-50.png')} />
          </TouchableOpacity>
        </View>
          
      </ImageBackground>
    )
  }
}

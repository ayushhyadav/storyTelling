import React,{Component} from "react";
import { View,Text,Dimensions,ScrollView, FlatList,Modal, TouchableOpacity,SafeAreaView } from "react-native";
import Front from "./Front";
import Front2 from "./Front2";
import Front3 from "./Front3";
import Front4 from "./Front4";
const DimensionsHight = Dimensions.get('screen').height
const DimensionsWidth = Dimensions.get('screen').width
const screens =[Front,Front2,Front3]
export default class Screenprocess extends Component{
    constructor(props){
        super(props)
        this.state={
            currentIndex:0
        }
    }
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'white',alignItems:'center'}}>
                
                <ScrollView
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                 scrollEventThrottle={16}
                 pagingEnabled
                 onScroll={event => { 
                    const index = Math.round(event.nativeEvent.contentOffset.x / DimensionsWidth);
                    this.setState({currentIndex:index})
                    console.log(index);
                  
                  }}
                >
               <Front width ={DimensionsWidth} height={DimensionsHight}/>
             <Front2 width ={DimensionsWidth} height={DimensionsHight}/>
             <Front3 width ={DimensionsWidth} height={DimensionsHight}/>
             <Front4 width ={DimensionsWidth} height={DimensionsHight}/>
            
               </ScrollView>
               <FlatList style={{position:'absolute',marginTop:DimensionsHight-150}}
                  data={screens}
                  horizontal={true}
                  renderItem={({item,index})=>
                  <View style={{width:8,height:8,borderRadius:10,backgroundColor:this.state.currentIndex == index?'#2ADB7F':'grey',marginTop:10,marginBottom:10,marginLeft:5}}>
                  </View>
                  
                }
                />
            </SafeAreaView>
        )
    }
    
}
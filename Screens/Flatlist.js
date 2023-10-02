// import React, { Component } from 'react'
// import { View,FlatList } from 'react-native'
// import Front from './Front'
// import Front2 from './Front2'
// import Front3 from './Front3'
// import Front4 from './Front4'
// const screens =[Front,Front2,Front3,Front4]

// export default class Flatlist extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             currentIndex:0
//         }
//     }
//   render() {
//     return (
//       <View>
//          <FlatList 
//                   data={screens}
//                   horizontal={true}
//                   renderItem={({item,index})=>
//                   <View style={{width:15,height:15,borderRadius:10,backgroundColor:this.state.currentIndex == index?'#2ADB7F':'grey',marginTop:10,marginBottom:10,marginLeft:5}}>
//                   </View>
//                 }
//                 />
//       </View>
//     )
//   }
// }

import React, {Component} from 'react';
import { AppRegistry, Image,TextInput, ScrollView, Dimensions, StyleSheet, Text, View} from 'react-native';

export default class HozizontalScrollView extends Component {
    render(){

        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                onMomentumScrollBegin={()=>{
                    // alert("begin scrolling");
                }}

                onMomentumScrollEnd={()=>{
                    // alert("end scrolling");
                }}
                onScroll={(event)=>{
                    let logData = `Scroll to x=${event.nativeEvent.contentOffset.x}, y=${event.nativeEvent.contentOffset.y}`;
                    console.log(logData);
                }}
            >

            <View
                style={{
                    backgroundColor: 'yellow',
                    flex: 1,
                    // marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: screenWidth
                }}
            >
                <Text style={{fontSize:20, padding: 15, color:'white', textAlign: "center"}} >Screen 1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'green',
                    flex: 1,
                    // marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: screenWidth
                }}
            >
                <Text style={{fontSize:20, padding: 15, color:'white', textAlign: "center"}} >Screen 2</Text>
            </View>

            <View
                style={{
                    backgroundColor: 'blue',
                    flex: 1,
                    // marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: screenWidth
                }}
            >
                <Text style={{fontSize:20, padding: 15, color:'white', textAlign: "center"}} >Screen 3</Text>
            </View>

            </ScrollView>
        );
    }
}
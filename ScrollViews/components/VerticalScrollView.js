/*
/ Pham Quang Vy
/ Vertical Sroll View
*/

import React, {Component} from 'react';
import { AppRegistry, Image,TextInput, ScrollView, Dimensions, StyleSheet, Text, View} from 'react-native';

export default class VerticalScrollView extends Component {
    render(){
        return(
            <ScrollView 
                // style={{margin: 10}} 
                keyboardDismissMode='on-drag'
                maximumZoomScale={3}
                minimumZoomScale={0.2}
            >
            <Image 
                source={require('../images/Anh.jpg')}
                // style={{width: screenWidth, height: screenWidth * 960 / 960}}
                style={{ width: 350, height: 300}}
                
            >

            </Image>

            <Text
                style=
                {{
                    fontSize: 20,
                    padding: 5,
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'green'
                }}
            > This is text of image

            </Text>
            <TextInput
                style={{padding: 10, margin: 10, borderWidth: 1}}
                placeholder="Enter text"
            >

            </TextInput>

            <View style={{backgroundColor:'red', height: 40}} >
                <Text style={{fontSize: 20, padding: 5, color: 'white', textAlign: 'center'}} >
                    Text inside view
                </Text>
            </View>
            <Image 
                source={require('../images/Anh.jpg')}
                // style={{width: screenWidth, height: screenWidth * 960 / 960}}
                style={{ width: 350, height: 300}}
                
            >

            </Image>
            <Image 
                source={require('../images/Anh.jpg')}
                // style={{width: screenWidth, height: screenWidth * 960 / 960}}
                style={{ width: 350, height: 300}}
            >

            </Image>
            <Image 
                source={require('../images/Anh.jpg')}
                // style={{width: screenWidth, height: screenWidth * 960 / 960}}
                style={{ width: 350, height: 300}}
                
            >

            </Image>
        </ScrollView>
        );

    }
}
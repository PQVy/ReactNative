import React, { Component } from 'react';
import { View, Text, ScrollView, AppRegistry, StyleSheet, ViewPagerAndroid  } from 'react-native';

export default class ViewPageExample extends Component {
    render(){
        return(
            <ViewPagerAndroid style={{flex:1}} initialPage={2} onPageScroll={(event) => {alert(`offset = ${event.nativeEvent.offset}`)}} >
                <View style={{backgroundColor: 'green'}}>
                    <Text style={styles.textStyle}>Screen1</Text>
                </View>
                <View style={{backgroundColor: 'red'}}>
                    <Text style={styles.textStyle}>Screen2</Text>
                </View>
                <View style={{backgroundColor: 'blue'}}>
                    <Text style={styles.textStyle}>Screen3</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
});
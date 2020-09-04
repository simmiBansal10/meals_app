import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const DefaultText = props =>{
    return (<Text style={styles.fontss}> {props.children} </Text>)
};

const styles = StyleSheet.create({
    fontss:{
        fontFamily: 'open-sans'
    }
});


export default DefaultText;
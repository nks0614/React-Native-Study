/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  ActivityIndicator, 
  TouchableOpacity,
  Image
} from 'react-native';
import CustomTextInput from './TextInput';

const colors = {
    background : '#e3e3e3',
    dodgerBlue : 'rgb(58, 139, 235)',
    dusk : 'rgb(65, 77, 107)',
    cloudyBlue : 'rgb(175, 194, 219)',
    blueyGray : 'rgb(134, 154, 183)',
    paleGray : 'rgb(213, 227, 234)'
  }

const CustomButton = (props) => {
    const [value, setValue] = useState({

	})


    if(!!props.isDisabled){
        return(
            <View style={props.containerStyle}>
                <View style={props.disabledStyle}>
                    <Text style={props.textStyle}>
                        {props.children}
                    </Text>
                </View>
            </View>
        )
    }

    if(!!props.isLoading){
        return (
            <View style={props.containerStyle}>
                <View style={props.style}>
                    <ActivityIndicator size='small' color={props.indicatorColor}/> 
                </View>
            </View>
        )
    }

    return (
        <View style={props.containerStyle}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <View style={props.style}>
                    {
                        props.imgLeftStyle ?
                        <Image style={props.imgLeftStyle}
                            source={props.imgLeftSrc}/>
                        : <View />
                    }
                    <Text style={props.textStyle}>{props.children}</Text>
                </View>
           </TouchableOpacity>
        </View>
    )
};

CustomButton.defaultProps = {
    containerStyle : styles.container,
    isLoading : false,
    isDisabled : false,
    style : styles.btn,
    textStyle : styles.text,
    imgLeftStyle : styles.imgLeft,
    indicatorColor : 'white'

}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});

export default CustomButton;

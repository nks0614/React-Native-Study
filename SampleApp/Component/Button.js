/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet, TextInput, View, Text, Button
} from 'react-native';

const colors = {
    background : '#e3e3e3',
    dodgerBlue : 'rgb(58, 139, 235)',
    dusk : 'rgb(65, 77, 107)',
    cloudyBlue : 'rgb(175, 194, 219)',
    blueyGray : 'rgb(134, 154, 183)',
    paleGray : 'rgb(213, 227, 234)'
  }

const CustomTextInput = (props) => {
    const [value, setValue] = useState({

	})


    return (
        <View style={[
            props.styles
            ]}>
            <Button>
                {props.text}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default ;

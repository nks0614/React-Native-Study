/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet, TextInput, View
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
		focus: false
	})

	const { focus } = value

    return (
        <View style={[
            styles.wrapper,
            ]}>
            <TextInput
                style={[
                    props.style,
                    focus ? styles.inputFocus : styles.input
                ]}
                multiline={props.multiline}
                onChangeText={props.onChangeText}
                value={props.value}
                onFocus={() => { setValue({ focus : true}) }}
                onBlur={() => { setValue({ focus : false}) }}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    input: {
    	color: colors.dusk,
    	fontSize: 16,
    	paddingVertical: 22,
    	paddingHorizontal: 20,
    	borderWidth: 1,
		borderColor: colors.paleGray,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputFocus: {
        color: colors.dusk,
    	fontSize: 16,
    	paddingVertical: 22,
    	paddingHorizontal: 20,
    	borderWidth: 1,
		borderColor: colors.dodgerBlue,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default CustomTextInput;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import CustomTextInput from './TextInput'
import {
  	StyleSheet,
  	View,
  	Text,
  	Image,
  	TouchableOpacity,
  	TextInput
} from 'react-native';

const colors = {
	background : '#e3e3e3',
  	dodgerBlue : 'rgb(58, 139, 235)',
  	dusk : 'rgb(65, 77, 107)',
  	cloudyBlue : 'rgb(175, 194, 219)',
  	blueyGray : 'rgb(134, 154, 183)',
  	paleGray : 'rgb(213, 227, 234)'
}

const LoginScreen = () => {
	const [value, setValue] = useState({
		email : '',
		pw : ''
	})

	const { email, pw } = value

	const onTextChanged = (type, text) => {
		switch(type){
			case 'EMAIL':
				setValue({
					...value,
					email : text
				})
				break
			case 'PASSWORD':
				setValue({
					...value,
					pw : text
				})
				break
		}

	}

	return (
		<View style={styles.container}>
			<View style={styles.iconWrapper}>
				<Image style={styles.icon} source={require('./assets/blue-whale.png')}/>
				<Text style={styles.iconText}>Hello World!</Text>
			</View>
			<View style={styles.wrapper}>
				<View style={styles.wrapperInput}>
					<CustomTextInput
						styles={{marginTop: 60}}
						value={email}
						label={'email'}
						onChangeText={(text) => {
							onTextChanged('EMAIL', text)
						}}
						placeholder={'Write Email'}
						placeholderTextColor={colors.blueyGray}
					/>
					<CustomTextInput
						styles={{marginTop: 12}}
						value={pw}
						label={'password'}
						onChangeText={(text) => {
							onTextChanged('PASSWORD', text)
						}}
						placeholder={'Write PASSWORD'}
						placeholderTextColor={colors.blueyGray}
						secureTextEntry={true}
					/>
					{/* <TextInput 
						style={[
							styles.input, 
							{marginTop : 60}
						]}
						value={email}
						placeholder='Write Email'
						placeholderTextColor={colors.blueyGray}
						onChangeText={(text) => {
							onTextChanged('EMAIL', text)
						}}/> */}
					{/* <TextInput 
						style={[
							styles.input, 
							{marginTop : 12}
						]}
						value={pw}
						placeholder='Write Password'
						placeholderTextColor={colors.blueyGray}
						onChangeText={(text) => {
							onTextChanged('PASSWORD', text)
						}}
						secureTextEntry={true}/>			 */}
				</View>
				<TouchableOpacity style={styles.touchForgot}>
					<Text style={styles.forgotPW}>Forgot Password?</Text>
				</TouchableOpacity>
				<Text style={styles.copyright}>copyright by nkstar</Text>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	flexDirection: 'column',
		alignItems: 'flex-start',
  	},
  	iconWrapper: {
    	position: 'absolute',
    	top: 144,
    	left: 40,
    	flexDirection: 'column',
    	alignItems: 'flex-start'
  	},
  	icon: {
    	width: 60,
    	height: 60
  	},
  	iconText: {
    	fontSize: 20,
    	color: colors.dusk,
    	fontSize: 24,
    	marginTop: 16,
    	fontWeight: 'bold'
	},
	wrapper: {
		marginTop: 260,
		width: '80%',
		height: 300,
		flexDirection: 'column',
		alignItems: 'center',
		alignSelf: 'center'
	},
  	wrapperInput: {
    	flexDirection: 'column',
    	justifyContent: 'flex-start',
		alignItems: 'flex-start',
		alignSelf: 'stretch'
  	},
  	input: {
    	color: colors.dodgerBlue,
    	fontSize: 16,
    	paddingVertical: 22,
    	paddingHorizontal: 20,
    	borderWidth: 1,
		borderColor: colors.paleGray,
		alignSelf: 'stretch'
	},
	touchForgot: {
		marginTop: 20,
	},
	forgotPW: {
		fontSize: 12,
		color: colors.dodgerBlue,
		textDecorationLine: 'underline',
	},
	copyright: {
		marginTop: 80,
		fontSize: 12,
		color: colors.cloudyBlue
	}
});

export default LoginScreen

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
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

class LoginScreen extends Component{
	constructor(props){
		super(props)
		this.state = {
			email : '',
			pw : ''
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.iconWrapper}>
					<Image style={styles.icon} source={require('./assets/blue-whale.png')}/>
					<Text style={styles.iconText}>Hello</Text>
				</View>
				<View style={styles.wrapper}>
					<View style={styles.wrapperInput}>
						<TextInput 
								style={[
									styles.input, 
									{marginTop : 60}
								]}
								value={this.state.email}
								placeholder='Write Email'
								placeholderTextColor={colors.blueyGray}
								onChangeText={(text) => {
									this.onTextChanged('EMAIL', text)
								}}/>
						<TextInput 
								style={[
									styles.input, 
									{marginTop : 12}
								]}
								value={this.state.pw}
								placeholder='Write Password'
								placeholderTextColor={colors.blueyGray}
								onChangeText={(text) => {
									this.onTextChanged('PASSWORD', text)
								}}
								secureTextEntry={true}/>			
					</View>
					<TouchableOpacity style={styles.touchForgot}>
						<Text style={styles.forgotPW}>Forgot Password?</Text>
					</TouchableOpacity>
					<Text style={styles.copyright}>copyright by nkstar</Text>
				</View>
			</View>
		)
	}

	onTextChanged = (type, text) => {
		switch(type){
			case 'EMAIL':
				this.setState({
					email: text
				})
				break
			case 'PASSWORD':
				this.setState({
					pw: text
				})
				break
		}
	}
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
    width: '100%',
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

import { KeyboardAvoidingView, StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../AuthContext'
import axios from 'axios'
import styles from '../assets/stylesheet/styles'

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation();
    const { token, setToken } = useContext(AuthContext);
    useEffect(() => {
        if (token) {
            navigation.replace("MainStack", { screen: 'Main' })
        }
    }, [token, navigation])
    const handleLogin = () => {
        try {
            const user = {
                email: email,
                password: password,
            };

            axios.post("http://192.168.56.1:8000/login", user).then(response => {
                const token = response.data.token;
                console.log("token", token);
                AsyncStorage.setItem("authToken", token);
                setToken(token);
            })
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert('Login Failed', 'Invalid email or password');
            } else {
                console.log('Error:', error);
                Alert.alert('Login Failed', 'An unexpected error occurred');
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.signContent}>
                <KeyboardAvoidingView>
                    <View style={styles.titleContainer}>
                        <Text style={{ fontSize: 20, fontWeight: "500" }}>Login to your account</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.firstInputLabel}>Email</Text>
                            <View>
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholderTextColor="#BEBEBE"
                                    style={styles.textInput}
                                    placeholder='Enter your email'
                                />
                            </View>

                            <Text style={styles.inputLabel}>
                                Password
                            </Text>
                            <View>
                                <TextInput
                                    secureTextEntry={true}
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholderTextColor="#BEBEBE"
                                    style={styles.textInput}
                                    placeholder='Enter your password'
                                />
                            </View>
                        </View>

                        <Pressable
                            onPress={handleLogin}
                            style={styles.signButton}>
                            <Text style={styles.signButtonText}>
                                Login
                            </Text>
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signOptionText}>
                                Don't have an account? Sign Up
                            </Text>
                        </Pressable>
                    </View>

                    <View
                        style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://signal.org/assets/images/features/Media.png'
                            }}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View >
        </SafeAreaView >
    )
}

export default LoginScreen


import { KeyboardAvoidingView, StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import styles from '../assets/stylesheet/styles'

const RegisterScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image
    }

    axios.post('http://192.168.56.1:8000/register', user).then(response => {
      console.log(response);
      Alert.alert(
        "Registration successfull",
        "You have been registered successfully!"
      );
      setName('');
      setEmail('');
      setPassword('');
      setImage('');
    }).catch(error => {
      Alert.alert(
        "Registration error",
        error.message
      )
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signContent}>
        <KeyboardAvoidingView>
          <View style={styles.profileImageContainer}>
            <Text style={styles.title}>Set up your profile</Text>
            <Text style={styles.subTitle}>
              Profiles are visible to your friends, connections and groups
            </Text>
            <Pressable>
              <Image
                source={{ uri: image ? image : "https://cdn-icons-png.flaticon.com/128/149/149071.png" }}
                style={styles.smallImage}
              />
              <Text style={styles.profileImageText}>Add</Text>
            </Pressable>
          </View>
          <View style={styles.textInputContainer}>
            <View>
              <Text style={styles.firstInputLabel}>
                Name
              </Text>
              <View>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#BEBEBE"
                  style={styles.textInput}
                  placeholder='Enter your name'
                />
              </View>

              <Text style={styles.inputLabel}>
                Email
              </Text>
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

              <Text style={styles.inputLabel}>
                Image
              </Text>
              <View>
                <TextInput
                  value={image}
                  onChangeText={setImage}
                  placeholderTextColor="#BEBEBE"
                  style={styles.textInput}
                  placeholder='Enter your image url'
                />
              </View>
            </View>

            <Pressable
              onPress={handleRegister}
              style={styles.signButton}>
              <Text style={styles.signButtonText}>
                Register
              </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={styles.signOptionText}>
                Already have an account? Sign In
              </Text>
            </Pressable>
          </View>

        </KeyboardAvoidingView>
      </View >
    </SafeAreaView >
  )
}

export default RegisterScreen


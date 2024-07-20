import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AuthContext } from '../AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios';
import styles from '../assets/stylesheet/styles';


const RequestChatRoom = () => {
    const navigation = useNavigation();
    const [message, setMessage] = useState("")
    const { token, userId, setToken, setUserId } = useContext(AuthContext)
    const route = useRoute();
    useLayoutEffect(() => {
        return navigation.setOptions({
            headerTitle: "",
            headerLeft: () => (
                <View style={styles.flexRowAlignCenterGapTen}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </Pressable>
                    <View>
                        <Text style={styles.chatHeaderTitle}>{route?.params?.name}</Text>
                    </View>
                </View>
            )
        })
    }, []);
    console.log("userId", userId);
    console.log("Rec", route?.params.receiverId);
    const sendMessage = async () => {
        try {
            const userData = {
                senderId: userId,
                receiverId: route?.params?.receiverId,
                message: message
            };

            const response = await axios.post("http://192.168.56.1:8000/sendrequest", userData);

            if (response.status == 200) {
                setMessage("");
                Alert.alert("Your request has been shared", "Wait for the user to accept your request")
            }
        } catch (error) {
            console.log('Error', error)
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView></ScrollView>

            <View
                style={styles.messageInputContainer}>
                <Entypo name="emoji-happy" size={24} color="gray" />

                <TextInput
                    placeholder='type your message...'
                    value={message}
                    onChangeText={setMessage}
                    style={styles.messageInput}
                />

                <View style={styles.messageIconsContainer}>
                    <Entypo name="camera" size={24} color="gray" />

                    <Feather name="mic" size={24} color="gray" />

                </View>

                <Pressable
                    onPress={sendMessage}
                    style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </Pressable>
            </View>

        </KeyboardAvoidingView>
    )
}

export default RequestChatRoom


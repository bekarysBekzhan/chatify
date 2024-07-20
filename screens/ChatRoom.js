import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { AuthContext } from '../AuthContext';
import { useScoketContext } from '../SocketContext';
import axios from 'axios';
import styles from '../assets/stylesheet/styles';

const ChatRoom = () => {
    const navigation = useNavigation();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const { token, userId, setToken, setUserId } = useContext(AuthContext);
    const { socket } = useScoketContext();
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

    const listenMessages = () => {
        const { socket } = useScoketContext();

        useEffect(() => {
            socket?.on('newMessage', newMessage => {
                newMessage.shouldShake = true;
                setMessage([...messages, newMessage])
            });

            return () => socket?.off('newMessage')
        }, [socket, messages, setMessages])
    }

    listenMessages();

    const sendMessage = async (senderId, receiverId) => {
        try {
            await axios.post("http://192.168.56.1:8000/sendMessage", {
                senderId,
                receiverId,
                message
            });

            socket.emit('sendMessage', { senderId, receiverId, message });

            setMessage("");

            setTimeout(() => {
                fetchMessages()
            }, 100)
        } catch (error) {
            console.log("Error", error)
        }
    }

    const fetchMessages = async () => {
        try {
            const senderId = userId;
            const receiverId = route?.params?.receiverId;

            const response = await axios.get("http://192.168.56.1:8000/messages", {
                params: { senderId, receiverId }
            });

            setMessages(response.data);
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        fetchMessages();
    }, [])

    console.log("messages", messages);

    const formatTime = (time) => {
        const date = new Date(time);

        date.setHours(date.getHours() + 5);

        const options = { hour: 'numeric', minute: 'numeric' };
        return date.toLocaleString('en-US', options);
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
                {messages?.map((item, index) => {
                    return (
                        <Pressable style={[
                            item?.senderId?._id == userId ? {
                                alignSelf: "flex-end",
                                backgroundColor: "#75ff8a",
                                padding: 8,
                                maxWidth: "60%",
                                borderRadius: 7,
                                margin: 10
                            } : {
                                alignSelf: "flex-start",
                                backgroundColor: "#7499ff",
                                padding: 8,
                                maxWidth: "60%",
                                borderRadius: 7,
                                margin: 10
                            }
                        ]}>
                            <Text style={styles.chatText}>{item?.message}</Text>
                            <Text style={styles.chatTime}>{formatTime(item?.timeStamp)}</Text>
                        </Pressable>
                    )
                })}
            </ScrollView>

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
                    onPress={() => sendMessage(userId, route?.params.receiverId)}
                    style={styles.sendButton}>
                    <Text style={styles.ordinaryText}>Send</Text>
                </Pressable>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ChatRoom
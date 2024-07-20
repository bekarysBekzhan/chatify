import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../AuthContext';
import styles from '../assets/stylesheet/styles';

const Chat = ({ item }) => {
    const navigation = useNavigation();
    const { userId } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    return (
        <Pressable
            onPress={() => navigation.navigate('ChatRoom', {
                name: item?.name,
                receiverId: item?._id,
                image: item?.image
            })}
            style={styles.marVer15}>
            <View style={styles.flexRowAlignCenterGapTen}>
                <Pressable>
                    <Image
                        source={{ uri: item?.image }}
                        style={styles.mediumImage} />
                </Pressable>

                <View>
                    <Text style={styles.mediumBoldText}>{item?.name}</Text>
                    <Text style={styles.subText}>chat with {item?.name}</Text>
                </View>

                <Text>{item?.date}</Text>
            </View>
        </Pressable>
    )
}

export default Chat


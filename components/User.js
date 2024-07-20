import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/stylesheet/styles'

const User = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.peopleChatContainer}>
            <View style={styles.flexRowAlignCenterGapTen}>
                <Pressable>
                    <Image
                        source={{ uri: item?.image }}
                        style={styles.userChatImage} />
                </Pressable>

                <View style={styles.flexone}>
                    <Text>{item?.name}</Text>
                    <Text>{item?.email}</Text>
                </View>

                <Pressable
                    onPress={() =>
                        navigation.navigate("Request", {
                            name: item?.name,
                            receiverId: item?._id,
                        })
                    }
                    style={styles.chatButton}>
                    <Text style={styles.ordinaryText}>Chat</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default User


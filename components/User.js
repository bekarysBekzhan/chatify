import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import styles from '../assets/stylesheet/styles'

const User = ({ item }) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    return (
        <View style={styles.peopleChatContainer}>
            <View style={styles.flexRowAlignCenterGapTen}>
                <Pressable>
                    <Image
                        source={{ uri: item?.image }}
                        style={styles.userChatImage} />
                </Pressable>

                <View style={styles.flexone}>
                    <Text style={{color: colors.text}}>{item?.name}</Text>
                    <Text style={{color: colors.text}}>{item?.email}</Text>
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


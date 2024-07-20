import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../AuthContext';
import styles from '../assets/stylesheet/styles';

const UserProfile = ({ item }) => {
    const navigation = useNavigation();
    const { userId } = useContext(AuthContext);
    return (
        <View style={styles.userProfileContainer}>
            <View style={styles.flexRowAlignCenterGapTen}>
                <Pressable>
                    <Image
                        source={{ uri: item?.image }}
                        style={styles.mediumImage} />
                </Pressable>

                <View style={{ flex: 1 }}>
                    <Text style={styles.userProfileName}>{item?.name}</Text>
                    <Text>{item?.email}</Text>
                </View>

            </View>
        </View>
    )
}

export default UserProfile


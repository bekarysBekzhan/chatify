import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import InstaStory from 'react-native-insta-story';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from '../assets/stylesheet/styles';

const GroupScreen = () => {

    const channels = [
        {
            id: '0',
            name: 'Netflix',
            image: 'https://cdn-icons-png.flaticon.com/128/2504/2504929.png',
            text: 'You are in the right place',
            date: '2:45 AM',
        },
        {
            id: '1',
            name: 'Marc Zuckerberg',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtsQvDUZ3Q90XuFjYvcZ-KVaDhUJcA39u-g&s',
            text: 'Anyone else watching this weekend?',
            date: '2:45 AM',
        },
        {
            id: '2',
            name: 'Tesla community',
            image: 'https://avatars.mds.yandex.net/i?id=b0afa4eceb427b9ea75a0d63f5b17806-5878501-images-thumbs&n=13',
            text: "We're just 9 days away from the biggest Tesla & SpaceX event...",
            date: '1:45 PM',
        },
        {
            id: '3',
            name: 'Space X',
            image: 'https://avatars.mds.yandex.net/i?id=ee1dd1e6e7d12ea7185c4ee40661434f56ae4d90-5712369-images-thumbs&n=13',
            text: 'The fourth flight of Starship brought us closer to...',
            date: '2:45 AM',
        },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>

                <Text style={styles.headerTitle}>Groups</Text>

                <View style={styles.headerIcons}>
                    <View style={styles.flexRowAlignCenterGapTen}>
                        <Feather name="moon" size={26} color="white" />
                        <Ionicons name="search" size={26} color="white" />
                        <Entypo name="dots-three-vertical" size={22} color="white" />
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={styles.paddingTen}>
                    {channels?.map((item, index) => (
                        <View style={styles.channelContainer}>
                            <View style={styles.channelInfo}>
                                <View>
                                    <Image style={styles.smallImage} source={{ uri: item?.image }} />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={styles.channelName}>{item?.name}</Text>
                                    <Text style={styles.channelText}>{item?.text}</Text>
                                </View>

                                <Feather name="chevron-right" size={26} color="gray" />
                            </View>
                        </View>
                    ))}

                </View>
            </ScrollView>

            <Pressable style={styles.button}>
                <MaterialIcons name="group-add" size={24} color="white" />
            </Pressable>
        </SafeAreaView >
    )
}

export default GroupScreen
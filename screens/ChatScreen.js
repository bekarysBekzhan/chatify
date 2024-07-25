import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext'
import { useNavigation, useTheme } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from "jwt-decode";
import 'core-js/stable/atob';
import axios from 'axios'
import Chat from '../components/Chat';
import InstaStory from 'react-native-insta-story'
import styles from '../assets/stylesheet/styles'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ChatScreen = () => {
  const [options, setOptions] = useState(["Chats"]);
  const [chats, setChats] = useState([]);
  const [requests, setRequests] = useState([]);
  const { token, setToken, userId, setUserId } = useContext(AuthContext);
  const chooseOption = option => {
    if (options.includes(option)) {
      setOptions(options.filter(c => c !== option));
    } else {
      setOptions([...options, option]);
    }
  }
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwtDecode(token);
      setToken(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) {
      getrequests();
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);

  const getrequests = async () => {
    try {
      const response = await axios.get(`http://192.168.56.1:8000/getrequests/${userId}`);
      setRequests(response.data)
    } catch (error) {
      console.log('Error', error)
    }
  }

  const acceptRequest = async requestId => {
    try {
      const response = await axios.post('http://192.168.56.1:8000/acceptrequest', {
        userId: userId,
        requestId: requestId,
      });

      if (response.status == 200) {
        await getrequests();
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(`http://192.168.56.1:8000/user/${userId}`);
      setChats(response.data);
    } catch (error) {
      console.log('Error fetching user', error);
      throw error;
    }
  };

  const data = [
    {
      user_id: 1,
      user_image: 'https://yandex-images.clstorage.net/is9X73a73/c06b88GBNh77/FxuOplkFt3SYgdM0sm3BQttyacbthn9ac9VmRjhO9dsfgudqBnm9iUUOyRQJqWF4dDzqMm-Kegci4JrgcMZKHnM_SvJ44AKwOfSTtII94JcPQ3gDTcOu_lYQ8tbt-2VeCURFHYHfyg_3uZvT2Cw0DWH9PofbLLxzd4UuxvamLQtFaU3UzcbFRZwio_Ty_TI0iwIJ8lxT7klHkGFw3U5jyVjGpK-xjLjOZTu4MHtcZX2Qv5rk-Q7e17aFrZfVFF-p5xlflE7k52bc8LEFID3RVUqiSAIOA886hJLR883PsChqVXRdor1JnvZL2eI5XEfMgJ0ohxrtbUQEhr0ENTT9ynSY7-dfp5cnj-FQVSKusiWokHqSrLHP2obwwYPNX-Ib2CbWXDCdu3xFWNvjqP81TaG8yqbJnC2WZLVtRlUlXQo2G791P_X3ZwzDM_RAjSHUy_LoUm_CD_kWYpLx7V3yOJnnl3yRLrjsZUibwfofpF8C_OjnCjwsBuTl3-WnVZ44lmnvl61FtFXMgPBkIP2CpsnDKdGPkd7bRJIwga3MMjpqd5V-As7IfqXK24BqPyXOEe_p50suzMVVh_83hWYdygXJzIUNNgX3blNwtuBNgYbLYnrRb3LNiQaC8uE8fEIaKubHzrJsSs9ESGmAuT5XvCPOqseq_nzVthcclWTUTLoGCI4VPKXEZQxwYcYAPtOVefIoEIwjnQs04BNwXb2DSGjFRD7S3igtR3mb4cs9tC3zzbr1K50t18bnnuf3l43qJUo91C_0dRUt8oG0YH0xxngxeZD905069NER853-oSuJFPc9AXyJXuY4-cFpfMZdgWxK5brszvZXBp-FRLWeC7VIzaddRxZVHjAit2GN0WU7gCjBb4AOSXbRYOIuH4MryEVUHAFfaD6V6mjgOrw1jTGcOKb6XS_EJ2esdvVU_Nukq-32XnRlhK7gMicAb-KkaoMb013CrRpGoNLgY',
      user_name: 'Elon Musk',
      stories: [
        {
          story_id: 1,
          story_image: 'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image: 'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
        },
      ],
    },
    {
      user_id: 2,
      user_image: 'https://avatars.mds.yandex.net/i?id=2f0340573a310e600d1120ca8e2aa9c3f68c0393-5582077-images-thumbs&n=13',
      user_name: 'Will Smith',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://images.pexels.com/photos/7610446/pexels-photo-7610446.jpeg?auto=compress&cs=tinysrgb&w=600',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image: 'https://images.pexels.com/photos/19985664/pexels-photo-19985664/free-photo-of-vintage-pictures-and-cd-disk.jpeg?auto=compress&cs=tinysrgb&w=600',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
    {
      user_id: 3,
      user_image: 'https://avatars.mds.yandex.net/i?id=23ae62ea0d9a154d0e743d5ffb042f11d72051d65410f7cf-7757621-images-thumbs&n=13',
      user_name: 'Neil Degrasse Tyson',
      stories: [
        {
          story_id: 1,
          story_image: 'https://images.pexels.com/photos/27101596/pexels-photo-27101596/free-photo-of-stars-in-the-galaxy.jpeg?auto=compress&cs=tinysrgb&w=600',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
    {
      user_id: 3,
      user_image: 'https://yandex-images.clstorage.net/98mtA3R55/db40f7EOws/mi5HrAnoatjOT9I3KUlBrsimyS6F9WnVYB4v9ulIipvVccNCxE6Dlku_HOU490ab_26vth8NyK_sZ9vwxgz1f9R-AeBDqXGAnwXKYyFKRKzV-4o_ma9tiHpcc_-pRteegHavf7A_8_wz3mCWE4EOnvI4-_kJVYqWhXG6iYZSiSqqFlSpL-EV5MlWjzcqcE2u1M_IGKOxa6BuImT4oRvD2tY3vnOJLsnTH-tfiSKZNJTfPvXPSlKdrZQAu5-cUrIcgw5RnCv6Bfr5Ra4tO0xnvvvO4DiHklSHTjRT1pAVz9fGLZpauBTn7w3NSqYVig28-SX2-EVymJu0BKywkVSKCb8ZXr8h1Cv46X2zAAZGVprV2-YMvbFSv1o4Wtq0Mvjz_hGjUb4f88AEyFOBEaIhveQtyuR-db6mrxuFhbtGlDmpJHq1OcoM8MR0viY6YUa6-uzDEp-7aYdRH3HdlgvQ8cEpgHeDDcngCulOpTi3P7v7OfHwXnS8h5AcsYaAa6UenAFUpgvcF9_6TpANMWNJjvz48AihsHOpaBtLxos4ys_oMKJppBXJ6jvafJYbqzW10Cja2X5Xn5ifKJGAnEqyHqQbUZoJyBXMxEiYDxx3U4_n39IYoJBxjGMAU96yB83X2xSmWqkO4PUt9UiHOLg0ss4G8sdSTLu8uxSaup1FsiaDC12qLsEs8-NOsiEhZFSp1MPXJbu-U6BNGVfnsB_J5-sVu0-cEv7BNcJumxGYGbDzL-fOSHO7r7UwhpqkbYwqmQVguAnCBe3JaL82HHFJrdrl5CiEs1KaaBtE15Eu2_TkJrhqsgng0xXNY5MdiACq-wTq-V1tpaKXBYG4v3ubDIsHUrUUzjLE6XKZIRpjUJvF7NU9srtYkl0rWN6RC9XV-iS8Rp0G0MYz5XCdELsUs_so6NFGVbi5iCedrKZTkAGbLlW_M_oI2PJsuBwpf0ee8f7sD4WLWaZoI2fqgS4',
      user_name: 'Chris Rock',
      stories: [
        {
          story_id: 1,
          story_image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image: 'https://images.pexels.com/photos/1943411/pexels-photo-1943411.jpeg?auto=compress&cs=tinysrgb&w=600',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
  ];


  const { colors } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>

        <Text style={styles.headerTitle}>Chatify</Text>

        <View style={styles.headerIcons}>
          <View style={styles.flexRowAlignCenterGapTen}>
            <Feather name="moon" size={26} color="white" />
            <Ionicons name="search" size={26} color="white" />
            <Entypo name="dots-three-vertical" size={22} color="white" />
          </View>
        </View>
      </View>

      <View style={styles.paddingTen}>
        <View>

          <View style={styles.storyContainer}>

            <InstaStory data={data} duration={10} style={{color: colors.text}}/>

          </View>

        </View>
        <Pressable
          onPress={() => chooseOption("Chats")}
          style={styles.option}>
          <View>
            <Text style={[styles.optionText, {color: colors.text}]}>Chats</Text>
          </View>
          <Entypo name="chevron-small-down" size={26} color={colors.text} />
        </Pressable>

        <View>
          {options?.includes("Chats") &&
            (chats?.length > 0 ? (
              <View>
                {chats?.map((item, index) => (
                  <Chat item={item} key={item?._id} />
                ))}
              </View>
            ) : (
              <View
                style={styles.chatList}>
                <View>
                  <Text style={{color: colors.text}}>No Chats yet</Text>
                  <Text style={{color: colors.text}}>Get started by messaging a friend</Text>
                </View>
              </View>
            ))}
        </View>

        <Pressable
          onPress={() => chooseOption("Requests")}
          style={styles.option}>
          <View>
            <Text style={[styles.optionText, {color: colors.text}]}>Requests</Text>
          </View>
          <Entypo name="chevron-small-down" size={26} color={colors.text} />
        </Pressable>

        <View style={{ marginVertical: 12 }}>
          {options?.includes("Requests") && (
            <View>
              <Text style={[styles.mediumBoldText, {color: colors.text}]}>Checkout all the requests</Text>
              {requests?.map((item, index) => (
                <Pressable style={styles.requestContainer}>
                  <View style={styles.flexRowAlignCenterGapTen}>
                    <Pressable>
                      <Image
                        source={{ uri: item?.from?.image }}
                        style={styles.requestImage} />
                    </Pressable>

                    <View style={{ flex: 1 }}>
                      <Text style={styles.mediumBoldText}>
                        {item?.from?.name}
                      </Text>

                      <Text style={styles.subText}>
                        {item?.message}
                      </Text>
                    </View>

                    <Pressable
                      onPress={() => acceptRequest(item?.from?._id)}
                      style={styles.acceptButton}>
                      <Text style={styles.acceptButtonText}>
                        Accept
                      </Text>
                    </Pressable>

                    <AntDesign name="delete" size={26} color="red" />
                  </View>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Recommendations')}>
        <MaterialCommunityIcons name="chat-plus-outline" size={24} color="white" />
      </Pressable>
    </SafeAreaView>
  )
}

export default ChatScreen
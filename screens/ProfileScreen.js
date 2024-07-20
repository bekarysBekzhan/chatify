import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, FlatList, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from "jwt-decode";
import 'core-js/stable/atob';
import User from '../components/User'
import UserProfile from '../components/UserProfile'
import styles from '../assets/stylesheet/styles'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const ProfileScreen = () => {
  const [user, setUser] = useState([]);
  const { token, setToken, userId, setUserId } = useContext(AuthContext);

  const navigation = useNavigation();

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://192.168.56.1:8000/currentuser/${userId}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchUsers();
  }, []);
  console.log("user", user)

  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      setToken('');
      navigation.replace("Login");
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <SafeAreaView style={styles.flexone}>
      <View style={styles.header}>

        <Text style={styles.headerTitle}>Profile</Text>

        <View style={styles.profileIconContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name="qr-code" size={22} color="white" />
            <Entypo name="dots-three-vertical" size={22} color="white" />
          </View>
        </View>
      </View>



      <View>
        <UserProfile item={user} />
      </View>

      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.row}>
            <View>
              <Feather name="moon" size={30} color="#734DDE" />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Dark Mode</Text>
            </View>

            <FontAwesome name="toggle-off" size={28} color="gray" />
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <View>
              <Ionicons
                name="person-outline"
                size={30}
                color="#734DDE"
              />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Account</Text>
              <Text style={{ color: "gray" }}>Name, City, Phone</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </View>

          <View style={styles.row}>
            <View>
              <Ionicons name="notifications-outline" size={30} color="#734DDE" />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Notificatoins</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </View>

          <View style={styles.row}>
            <View>
              <SimpleLineIcons
                name="lock"
                size={30}
                color="#734DDE"
              />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Security and Privacy</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </View>

          <View style={styles.row}>
            <View>
              <Feather
                name="pie-chart"
                size={30}
                color="#734DDE"
              />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Storage</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </View>

          <View style={styles.row}>
            <View>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={30}
                color="#734DDE"
              />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Chats</Text>
              <Text style={{ color: "gray" }}>Themes and Personalization</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </View>

          <View style={styles.row}>
            <View>
              <AntDesign
                name="laptop"
                size={30}
                color="#734DDE"
              />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Devices</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </View>

          <View style={styles.row}>
            <View>
              <AntDesign
                name="exclamationcircleo"
                size={30}
                color="#734DDE"
              />
            </View>

            <View style={styles.flexone}>
              <Text style={styles.boldText}>Help</Text>
            </View>

            <Feather name="chevron-right" size={22} color="gray" />
          </View>

          <Pressable onPress={logout} style={styles.row}>
            <View style={styles.logoutButton}>
              <View>
                <MaterialIcons
                  name="logout"
                  size={30}
                  color="#734DDE"
                />
              </View>

              <View style={styles.flexone}>
                <Text style={styles.boldText}>Log out</Text>
              </View>

              <Feather name="chevron-right" size={22} color="gray" />
            </View>
          </Pressable>


        </View>
      </ScrollView>




    </SafeAreaView >
  )
}

export default ProfileScreen


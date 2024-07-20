import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext';
import User from '../components/User';
import styles from '../assets/stylesheet/styles';

const PeopleScreen = () => {
  const [users, setUsers] = useState([]);
  const {token, userId} = useContext(AuthContext);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://192.168.56.1:8000/users/${userId}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log("users", users)

  return (
    <SafeAreaView>
      <View>
        <Text
          style={styles.headerText}>
          People using Chatify
        </Text>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) =>
          <User item={item} key={item?._id} />
        }
      />
    </SafeAreaView>
  )
}

export default PeopleScreen

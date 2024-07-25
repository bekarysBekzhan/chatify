import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PeopleScreen from '../screens/PeopleScreen';
import GroupScreen from '../screens/GroupScreen';
import PhotosScreen from '../screens/PhotosScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import RequestChatRoom from '../screens/RequestChatRoom';
import ChatRoom from '../screens/ChatRoom';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import { EventRegister } from 'react-native-event-listeners';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const { token, setToken } = useContext(AuthContext);
    console.log("token erf", token);

    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    height: 80,

                },
                tabBarLabelStyle: { paddingBottom: 15, fontSize: 12 }
            }}>
                <Tab.Screen
                    name="Chats"
                    component={ChatScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialIcons
                                    name="chat"
                                    size={30}
                                    color="#7607e1"
                                />
                            ) : (
                                <MaterialIcons
                                    name="chat"
                                    size={30}
                                    color="#989898"
                                />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Groups"
                    component={GroupScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialIcons
                                    name="group"
                                    size={30}
                                    color="#7607e1"
                                />
                            ) : (
                                <MaterialIcons
                                    name="group"
                                    size={30}
                                    color="#989898"
                                />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Contacts"
                    component={PeopleScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Feather
                                    name="smile"
                                    size={30}
                                    color="#7607e1"
                                />
                            ) : (
                                <Feather
                                    name="smile"
                                    size={30}
                                    color="#989898"
                                />
                            ),
                    }}
                />

                <Tab.Screen
                    name="Photos"
                    component={PhotosScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <MaterialIcons
                                    name="photo-library"
                                    size={30}
                                    color="#7607e1"
                                />
                            ) : (
                                <MaterialIcons
                                    name="photo-library"
                                    size={30}
                                    color="#989898"
                                />
                            ),
                    }}
                />
                
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons
                                    name="person-outline"
                                    size={30}
                                    color="#7607e1"
                                />
                            ) : (
                                <Ionicons
                                    name="person-outline"
                                    size={30}
                                    color="#989898"
                                />
                            ),
                    }}
                />

            </Tab.Navigator>
        );
    }

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data)
        })
        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [darkMode])


    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='People'
                    component={PeopleScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Request'
                    component={RequestChatRoom}
                />
                <Stack.Screen
                    name='ChatRoom'
                    component={ChatRoom}
                />
                <Stack.Screen
                    name='Recommendations'
                    component={PeopleScreen}
                />
            </Stack.Navigator>
        )
    }

    const MyDarkTheme = {
        dark: true,
        colors: {
            primary: '#50784f',
            background: '#211043',
            card: '#143387',
            text: '#eadcff',
            border: '#542b81',
            notification: '#c98d55',
        },
    };

    const MyLightTheme = {
        dark: false,
        colors: {
            primary: '#5C33CF',
            background: '#eadcff',
            card: '#a1bbff',
            text: '#211043',
            border: '#211043',
            notification: '#ff3b00',
        },
    };

    return (

        <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>

            <NavigationContainer theme={darkMode === true ? MyDarkTheme : MyLightTheme}>
                {token === null || token === '' ? <AuthStack /> : <MainStack />}
            </NavigationContainer>

        </themeContext.Provider>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})
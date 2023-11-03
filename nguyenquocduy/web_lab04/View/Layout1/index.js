import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react'

const Layout1 = ({ navigation }) => {
    const users = [{
            useremail: "quocduy",
        },
        {
            useremail: "quocduy1",
        },
        {
            useremail: "quocduy2",
        },
        {
            useremail: "quocduy3",
        }
    ]
    const [useremail, setUseremail] = useState("")

    const handleLogin = () => {
        const result = users.some(user => {
            return user.useremail === useremail;
        })
        if (result) {
            navigation.navigate("Layout2")
        } else {
            Alert.alert("Login failed")
        }
    }
    return ( <
        SafeAreaView style = {
            {
                flex: 1,
                padding: 15,
            }
        } >
        <
        View style = {
            {
                flex: 1,
                alignItems: "center",
                paddingTop: 25,
            }
        } >
        <
        Image source = { require("../../assets/Image 95.png") }
        style = {
            {
                width: "250px",
                height: "250px",
            }
        }
        />  <
        View style = {
            {
                justifyContent: 'center',
                alignItems: 'center',
                top: 35,
                left: 12,
                height: 50,
                width: 350,
                paddingTop: "25px",
            }
        } >
        <
        Text style = {
            {
                fontFamily: 'Epilogue',
                fontSize: 26,
                lineHeight: 26,
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 20,
                color: "#8353E2",
            }
        } > MANAGE YOUR { '\n' }
        TASK < /Text> < /
        View > <
        View style = {
            { width: '90%', marginTop: 80 }
        } >
        <
        View style = {
            {
                borderWidth: 1,
                borderRadius: "13px",
                borderColor: "#9095A0",
                backgroundColor: " #BCC1CA",
                position: "relative",
                marginBottom: 15,
            }
        } >
        <
        Image source = { require("../../assets/Frame.png") }
        style = {
            { position: "absolute", left: 12, height: "100%", width: 32 }
        }
        resizeMode = 'contain' /
        >
        <
        TextInput placeholder = 'Enter your name'
        style = {
            {
                fontSize: 18,
                fontWeight: "100",
                paddingVertical: 14,
                paddingLeft: 60,
                borderColor: "rgba(0,0,0,0.1)",
            }
        }
        value = { useremail }
        onChangeText = { text => setUseremail(text) }
        /> < /
        View > <
        /View> < /
        View >

        <
        /SafeAreaView>
    );
}
export default Layout1;
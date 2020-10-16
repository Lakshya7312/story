import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import firebase, { auth } from 'firebase';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    login = async (email, password) => {
        if (email, password) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password);
                if (response) {
                    this.props.navigation.navigate("Writing");
                }
            }
            catch (error) {
                switch (error.code) {
                    case "auth/user-not-found": Alert.alert("User not found!");
                        break;
                    case "auth/invalid-email": Alert.alert("Please enter a valid E-mail address");
                        break;
                    case "auth/wrong-password": Alert.alert("Incorrect Password!");
                        break;
                }
            }
        }
        else {
            Alert.alert("Enter Email and Password to continue!");
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.emailInput} placeholder="E-mail" keyboardType="email-address"
                    placeholderTextColor="#eeeeee"
                    onChangeText={(text) => { this.setState({ email: text }) }} />
                <TextInput style={styles.passInput} placeholder="Password" secureTextEntry={true}
                    placeholderTextColor="#eeeeee"
                    onChangeText={(text) => { this.setState({ password: text }) }} />
                <View>
                    <TouchableOpacity style={styles.login} onPress={() => { this.login(this.state.email, this.state.password) }}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.login2} onPress={()=>{this.props.navigation.navigate("signUpScreen")}}>
                        <Text style={styles.text}>Create an account instead!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222831"
    },

    emailInput: {
        borderWidth: 2,
        borderColor: "#00adb5",
        borderRadius: 4,
        width: 180,
        marginTop: 150,
        height: 30,
        padding: 5,
        color: "#ffffff",
        alignSelf: "center",
        justifyContent: "center"
    },

    passInput: {
        borderWidth: 2,
        borderColor: "#00adb5",
        borderRadius: 4,
        width: 180,
        padding: 5,
        marginTop: 40,
        height: 30,
        color: "#ffffff",
        alignSelf: "center",
        justifyContent: "center"
    },

    login: {
        backgroundColor: "#00adb5",
        marginTop: 25,
        width: 70,
        height: 27,
        borderRadius: 5,
        borderColor: "#eeeeee",
        alignSelf: "center"
    },

    text: {
        fontWeight: "bold",
        color: "#eeeeee",
        alignSelf: "center",
        marginTop: 3
    },

    login2: {
        backgroundColor: "#00adb5",
        marginTop: 100,
        width: 130,
        height: 27,
        borderRadius: 5,
        borderColor: "#eeeeee",
        alignSelf: "center"
    }
})
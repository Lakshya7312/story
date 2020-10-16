import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, TextInput } from 'react-native';
import firebase, { auth } from 'firebase';

export default class SignUpScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
    }

    signUp = async (email, password) => {
        if (email, password) {
            try {
                const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
                if (response) {
                    this.props.navigation.navigate("Writing");
                }
            }
            catch (error) {
                switch (error.code) {
                    case "auth/email-already-in-use": Alert.alert("This Email already exists, try signing in.");
                        break;
                    case "auth/invalid-email": Alert.alert("PLease enter a valid Email address!");
                        break;
                    case "auth/weak-password": Alert.alert("Your password is weak, try again by using a stronger password!");
                        break;
                }
            }
        }
        else {
            Alert.alert("Enter Email and choose a password to continue");
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
                    <TouchableOpacity style={styles.login} onPress={() => { this.signUp(this.state.email, this.state.password) }}>
                        <Text style={styles.text}>Create!</Text>
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
    }
})
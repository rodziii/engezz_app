import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; 
import styles from "../styles/login_screen"; 

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <LinearGradient colors={["#000000", "#1a1a1a"]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/LOGO_copy.png")} // ✅ Make sure this is a PNG/JPG
          style={styles.logo}
        />
        <Text style={styles.title}>ENGEZZ</Text>
        <Text style={styles.tagline}>NO CASH, NO HASSLE, JUST ENGEZZ</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL..."
          placeholderTextColor="#b0b0b0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD..."
          placeholderTextColor="#b0b0b0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;

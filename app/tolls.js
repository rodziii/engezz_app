import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/tolls_screen";
import BottomNav from "./bottomNav"; // Import bottom navigation

const tollsData = [
  {
    id: 1,
    name: "CAIRO-ALEX",
    image: require("../assets/cairo_alex.png"),
    qrCode: require("../assets/qrcode.png"),
  },
  {
    id: 2,
    name: "ELALAMIEN",
    image: require("../assets/elalamien.png"),
    qrCode: require("../assets/qrcode.png"),
  },
  {
    id: 3,
    name: "GALALA",
    image: require("../assets/glala.png"),
    qrCode: require("../assets/qrcode.png"),
  },
];

const TollsScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}> {/* Ensures no white background */}
      <View style={styles.container}>
        <Text style={styles.header}>TOLLS</Text>
        <ScrollView contentContainerStyle={styles.tollsList}>
          {tollsData.map((toll) => (
            <View key={toll.id} style={styles.tollCard}>
              <Image source={toll.image} style={styles.tollImage} />
              <Text style={styles.tollName}>{toll.name}</Text>
              <View style={styles.qrContainer}>
                <Image source={toll.qrCode} style={styles.qrCode} />
              </View>
              <TouchableOpacity
                style={styles.navigateButton}
                onPress={() => router.push(`/toll/${toll.id}`)}
              >
                <Text style={styles.navigateIcon}>➜</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNav/>
    </View>
  );
};

export default TollsScreen;

import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/parking_screen";
import BottomNav from "./bottomNav"; // Import bottom navigation

const parkingsData = [
  {
    id: 1,
    name: "ARKAN",
    location: "GIZA",
    image: require("../assets/arkan.png"),
    qrCode: require("../assets/qrcode.png"),
  },
  {
    id: 2,
    name: "DISTRICT5",
    location: "NEW CAIRO",
    image: require("../assets/district5.png"),
    qrCode: require("../assets/qrcode.png"),
  },
  {
    id: 3,
    name: "PARK ST",
    location: "GIZA",
    image: require("../assets/park_st.png"),
    qrCode: require("../assets/qrcode.png"),
  },
];

const ParkingScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={styles.container}>
        <Text style={styles.header}>PARKINGS</Text>
        <ScrollView contentContainerStyle={styles.parkingList}>
          {parkingsData.map((parking) => (
            <View key={parking.id} style={styles.parkingCard}>
              <Image source={parking.image} style={styles.parkingImage} />
              <Text style={styles.parkingName}>{parking.name}</Text>
              <Text style={[styles.parkingName, { top: 44, fontSize: 16 }]}>
                {parking.location}
              </Text>
              <View style={styles.qrContainer}>
                <Image source={parking.qrCode} style={styles.qrCode} />
              </View>
              <TouchableOpacity
                style={styles.navigateButton}
                onPress={() => router.push(`/parking/${parking.id}`)}
              >
                <Text style={styles.navigateIcon}>➜</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNav />
    </View>
  );
};

export default ParkingScreen;

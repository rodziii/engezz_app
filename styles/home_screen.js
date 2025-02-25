import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
  searchContainer: {
    marginHorizontal: 20,
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    color: "#000",
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  tagline: {
    color: "#e5e5e5",
    fontSize: 14,
  },
  menuContainer: {
    alignItems: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333",
    paddingVertical: 20,  // Increased height
    paddingHorizontal: 20,
    marginVertical: 12,   // Increased spacing
    width: "90%",
    borderRadius: 12,     // Slightly larger rounding
  },
  icon: {
    width: 70,   // Increased icon size
    height: 70,
    resizeMode: "contain",
  },
  menuText: {
    color: "#fff",
    fontSize: 18, // Slightly larger font
    fontWeight: "bold",
    flex: 1, // Ensures text takes available space
    textAlign: "center",
  },
  arrowContainer: {
    backgroundColor: "#1E90FF", // Blue background
    width: 40,
    height: 40,
    borderRadius: 20, // Make it a perfect circle
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    color: "#fff",  // White arrow
    fontSize: 20,   // Slightly larger arrow
  },
});

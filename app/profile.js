import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const image = require("../assets/images/1.jpeg");

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={image} style={styles.profileImage} />
        <Text style={styles.name}>saba noreen</Text>
        <Text style={styles.tagline}>developer</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>User Info</Text>
        <Text style={styles.cardText}>Email: sabanoreen416@gmail.com</Text>
        <Text style={styles.cardText}>Phone: +92 325 5278034</Text>
        <Text style={styles.cardText}>
          Address: chowk azam
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef1f5",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  tagline: {
    fontSize: 16,
    color: "#09090aff",
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#8db1e4ff",
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000ff",
  },
  cardText: {
    fontSize: 14,
    color: "#343232ff",
    marginBottom: 6,
  },
});

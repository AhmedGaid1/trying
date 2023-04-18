import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Profile </Text>{" "}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.profileImage} />{" "}
        </View>{" "}
        <View style={styles.profileInfoContainer}>
          <TextInput placeholder="First Name" value={firstName} onChangeText={(text) => setFirstName(text)} style={styles.textInput} /> <TextInput placeholder="Last Name" value={lastName} onChangeText={(text) => setLastName(text)} style={styles.textInput} /> <TextInput placeholder="Email" value="example@example.com" editable={false} style={[styles.textInput, styles.disabledTextInput]} /> <TextInput placeholder="Birthdate" value={birthdate} onChangeText={(text) => setBirthdate(text)} style={styles.textInput} /> <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)} style={styles.textInput} />{" "}
        </View>{" "}
      </View>{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 16,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  profileInfoContainer: {
    flexShrink: 1,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  disabledTextInput: {
    backgroundColor: "#eee",
    color: "#666",
  },
});

export default Profile;

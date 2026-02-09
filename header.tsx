import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Header = () => {
  const options = ["All", "Unread", "Topic", "My AI", "Groups"];

  return (
    <View style={styles.top}>
      {/* Chat Text with search, profile, menu, and add */}
      <View style={styles.searchAlign}>
        <Text style={styles.headerText}>Chat</Text>

        {/* Search Button */}
        <View style={styles.search}>
          <Pressable
            onPress={() => console.log("Menu")}
            style={({ hovered }) => hovered && { opacity: 0.6 }}
          >
            <EvilIcons name="search" size={34} color="gray" />
          </Pressable>
        </View>

        <View style={styles.addPerson}>
          <Pressable
            onPress={() => console.log("add")}
            style={({ hovered }) => hovered && { opacity: 0.6 }}
          >
            <Ionicons name="person-add-outline" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.menu}>
          <Pressable
            onPress={() => console.log("menu")}
            style={({ hovered }) => hovered && { opacity: 0.6 }}
          >
            <AntDesign name="menu" size={24} color="gray" />
          </Pressable>
        </View>

        <View style={styles.profile}>
          <Pressable
            onPress={() => console.log("profile")}
            style={({ hovered }) => hovered && { opacity: 0.6 }}
          >
            <Ionicons name="person-circle-outline" size={57} color="gray" />
          </Pressable>
        </View>
      </View>

      {/* Options */}
      <View style={styles.options}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={({ hovered }) => [
              styles.optionButton,
              hovered && styles.optionHover,
            ]}
          >
            {({ hovered }) => (
              <Text
                style={[styles.optionText, hovered && styles.optionTextHover]}
              >
                {option}
              </Text>
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
  },

  headerText: {
    // flex: 1,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    marginTop: 50,
  },

  options: {
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: 625,
    flexDirection: "row",
    paddingVertical: 70,
  },

  optionButton: {
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
    textAlign: "auto",
  },

  optionHover: {
    color: "lightgray",
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 500,
    backgroundColor: "lightblue",
  },

  optionText: {
    fontSize: 20,
    color: "gray",
  },

  optionTextHover: {
    color: "black",
    fontWeight: "500",
  },

  search: {
    backgroundColor: "lightgray",
    borderRadius: 800,
    borderWidth: 0,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 70,
    marginTop: 50,
  },

  searchAlign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  addPerson: {
    backgroundColor: "yellow",
    borderRadius: 800,
    borderWidth: 0,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 80,
    marginTop: 50,
  },

  menu: {
    backgroundColor: "lightgray",
    borderRadius: 800,
    borderWidth: 0,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    marginTop: 50,
  },

  profile: {
    backgroundColor: "lightgray",
    borderRadius: 800,
    borderWidth: 0,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 10,
    marginTop: 52
  },
});

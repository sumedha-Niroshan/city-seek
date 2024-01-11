import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("./../../../assets/logo.png")}
      />

      <View>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <Image
        style={styles.userImage}
        source={require("./../../../assets/user.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },

  header: {
    padding: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    alignItems: "center",
  },

  searchBar: {
    borderWidth: 1,
    borderBlockColor: "#000",
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.6,
  },
  userImage: {
    width: 50,
    height: 50,
  },
});

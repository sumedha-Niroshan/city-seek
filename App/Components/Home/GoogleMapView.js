import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function GoogleMapView() {
  return (
    <View style={{ marginTop: 2, padding: 20 }}>
      <MapView
        style={{
          width: Dimensions.get("screen").width * 0.89,
          height: Dimensions.get("screen").height * 0.23,
          borderRadius: 20,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation = {true}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({});

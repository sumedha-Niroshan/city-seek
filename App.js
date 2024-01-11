import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import TabNatigation from "./App/Navigations/TabNatigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNatigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});

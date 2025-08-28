import React from "react";
import { SafeAreaView } from "react-native";
import Profile from "./profile";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Switch between the screens below for testing */}
      {/* <LoginScreen /> */}

      {<Profile />}
    </SafeAreaView>
  );
}

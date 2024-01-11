import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Header from "../components/Header";
import QrCode from "../components/QrCode";

const JoinPool = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="flex-1 px-3">
        <Header />
        <QrCode title="Join Pool" />
      </View>
    </SafeAreaView>
  );
};

export default JoinPool;

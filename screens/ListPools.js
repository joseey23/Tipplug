import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const ListPools = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="flex-1 px-3">
        <Header />
        <View className="my-3 flex-1">
          <Text className="text-lg font-semibold text-gray-600">
            Collective | Join
          </Text>
          <View className="my-2 flex-1">
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListPools;

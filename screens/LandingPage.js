import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { height } from "../constants";
import * as Icons from "react-native-heroicons/solid";

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingTop: StatusBar.currentHeight }}
      className="flex-1"
    >
      <View className="flex-1 px-3">
        <View className="mt-3">
          <Icons.UserIcon className="self-end" size={24} color={"black"} />
        </View>
        <View className="my-3">
          <Text className="text-center font-bold text-xl">
            Choose From The Following
          </Text>
        </View>
        <View className="flex-1 justify-evenly">
          <TouchableOpacity
            className="border border-gray-400 bg-gray-200 p-2 rounded-lg justify-center items-center"
            style={{ height: height * 0.1 }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="font-semibold text-lg">I want to Tip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-gray-400 bg-gray-200 p-2 rounded-lg justify-center items-center"
            style={{ height: height * 0.1 }}
            onPress={() => navigation.navigate("Details")}
          >
            <Text className="font-semibold text-lg">I am receiving a Tip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-gray-400 bg-gray-200 p-2 rounded-lg justify-center items-center"
            style={{ height: height * 0.1 }}
            onPress={() => navigation.navigate("Search")}
          >
            <Text className="font-semibold text-lg">I am a business</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

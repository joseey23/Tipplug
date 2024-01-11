import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";

const SearchPool = ({ navigation }) => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="flex-1 px-3">
        <Header />

        <View className="flex-1 my-2">
          <TouchableOpacity
            className="border border-gray-300 p-3 rounded-xl justify-center items-center"
            onPress={() => navigation.navigate("List")}
          >
            <Text className="text-base font-semibold">
              Search Group/Business
            </Text>
          </TouchableOpacity>

          <View className="mt-6">
            <TouchableOpacity
              className="border border-gray-300 p-3 rounded-xl justify-center items-center"
              onPress={() => navigation.navigate("Join")}
            >
              <Text className="text-base font-semibold">Join Club</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPool;

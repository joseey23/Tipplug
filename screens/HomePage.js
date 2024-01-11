import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { width } from "../constants";
import * as Icons from "react-native-heroicons/solid";

const HomePage = () => {
  const [value, setValue] = useState("");
  return (
    <SafeAreaView
      style={{ paddingTop: StatusBar.currentHeight }}
      className="flex-1"
    >
      <View className="flex-1 px-3">
        <View className="mt-3">
          <Icons.UserIcon className="self-end" size={24} color={"black"} />
        </View>
        <View className="my-2">
          <Text className="text-xl text-gray-500 font-bold tracking-wider">
            Get Tips
          </Text>
          <Text className="font-bold text-black text-lg tracking-widest">
            Leave a Tip
          </Text>
        </View>
        <View className="my-2">
          <TextInput
            placeholder="Enter Tip Amount"
            className="bg-gray-200 p-3 border border-gray-200 rounded-full"
            value={value.toString()}
          />
        </View>
        <View className="my-3">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{ width: width * 0.2 }}
              className="bg-gray-200 border border-gray-100 p-2 rounded-full justify-center items-center mr-4"
              onPress={() => setValue(5)}
            >
              <Text>5 $</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: width * 0.2 }}
              className="bg-gray-200 border border-gray-100 p-2 rounded-full justify-center items-center mr-4"
              onPress={() => setValue(10)}
            >
              <Text>10 $</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: width * 0.2 }}
              className="bg-gray-200 border border-gray-100 p-2 rounded-full justify-center items-center mr-4"
              onPress={() => setValue(20)}
            >
              <Text>20 $</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: width * 0.2 }}
              className="bg-gray-200 border border-gray-100 p-2 rounded-full justify-center items-center mr-4"
              onPress={() => setValue(50)}
            >
              <Text>50 $</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: width * 0.2 }}
              className="bg-gray-200 border border-gray-100 p-2 rounded-full justify-center items-center mr-4"
              onPress={() => setValue(100)}
            >
              <Text>100 $</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View className="my-3">
          <Text className="font-semibold text-base">Leave a Note</Text>
          <TextInput
            placeholder="Leave a Note"
            className="bg-gray-200 border border-gray-100 p-2 rounded-lg h-[150px] mt-3"
          />
        </View>
        <View className="my-3">
          <Text className="font-semibold text-base">Phone Number</Text>
          <TextInput
            placeholder="Enter Phone Number"
            className="bg-gray-200 border border-gray-200 mt-3 p-3 rounded-full"
          />
        </View>
        <View className="my-3 px-5">
          <TouchableOpacity className="bg-orange-400 p-3 rounded-full justify-center items-center">
            <Text>Tip Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

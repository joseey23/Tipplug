import { View, Text } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { height, width } from "../constants";

const Header = () => {
  return (
    <>
      <View className="flex-row items-center justify-between">
        <Text className="font-semibold text-lg text-gray-700">John Kamau</Text>
        <Icons.UserIcon size={24} color={"black"} />
      </View>
      <View className="my-5">
        <Text className="font-semibold text-xl text-center"> 2300.00 KES</Text>
      </View>
      <View className="my-3 flex-row items-center border-b border-gray-200 pb-2">
        <View
          style={{ width: width * 0.3, height: height * 0.1 }}
          className="justify-between items-center border-r border-gray-200 px-3"
        >
          <Text className="text-center">No. of Businesses working For</Text>
          <View className="h-7 w-7 justify-center items-center p-1 rounded-lg border  border-gray-300 mt-2">
            <Text>3</Text>
          </View>
        </View>
        <View
          style={{ width: width * 0.3, height: height * 0.1 }}
          className="justify-between items-center border-r border-gray-200 px-3"
        >
          <Text className="text-center">No. of Groups or Pools</Text>
          <View className="h-7 w-7 justify-center items-center p-1 rounded-lg border  border-gray-300 mt-2">
            <Text>3</Text>
          </View>
        </View>
        <View
          style={{ width: width * 0.3, height: height * 0.1 }}
          className="justify-between items-center px-3"
        >
          <Text className="text-center">Tips Received</Text>
          <View className="h-7 w-7 justify-center items-center p-1 rounded-lg border  border-gray-300 mt-2">
            <Text>3</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;

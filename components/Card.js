import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View className="flex-row items-center justify-between border border-gray-400 p-3 rounded-xl mb-5">
      <View className="flex-row items-center space-x-2">
        <Image
          source={require("../assets/tipQrCode.png")}
          resizeMode="cover"
          className="h-10 w-10 rounded-md"
        />
        <View>
          <Text className="font-semibold text-base">Joseey</Text>
          <Text className="font-semibold text-sm text-gray-500">5 members</Text>
        </View>
      </View>
      <View className="space-y-3">
        <TouchableOpacity className="border border-gray-300 p-2 rounded-lg justify-center items-center">
          <Text>Join</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-gray-300 p-2 rounded-lg justify-center items-center">
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

import { View, Text, Image } from "react-native";
import React from "react";

const QrCode = ({ title = " Tip QrCode" }) => {
  return (
    <View>
      <View className="my-3">
        <Text className="text-center font-semibold text-lg">{title}</Text>
      </View>
      <View className="justify-center items-center">
        <Image
          source={require("../assets/tipQrCode.png")}
          resizeMode="cover"
          className="h-48 w-48"
        />
      </View>
    </View>
  );
};

export default QrCode;

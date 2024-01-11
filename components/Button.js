import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, url }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="border border-gray-500 p-3 rounded-xl justify-center items-center flex-row"
      onPress={() => navigation.navigate(url)}
    >
      <Text className="text-lg font-semibold">{title}</Text>
      <Icons.ChevronRightIcon size={26} color={"gray"} />
    </TouchableOpacity>
  );
};

export default Button;

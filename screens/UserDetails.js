import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import QrCode from "../components/QrCode";
import Button from "../components/Button";

const UserDetails = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="flex-1 px-3">
        <Header />
        <QrCode />
        <View className="my-5 px-4 flex-1 justify-around">
          <Button title={"Join Poll/Group"} url={"List"} />
          <Button title={"Customer Service"} url={"Search"} />
          <TouchableOpacity className="border border-gray-500 p-3 rounded-xl justify-center items-center">
            <Text className="text-lg font-semibold">Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;

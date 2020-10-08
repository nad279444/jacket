import React from "react";
import { ScrollView, View, Text } from "react-native";
import Data from "./components/Data"
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "./styles/global";
//import SingleJacket from "./components/SingleJacket";

export default function App() {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.iconContainer}>
        <View style={globalStyles.arrow}>
          <AntDesign name="arrowleft" size={20} color="black" />
        </View>
        <View style={globalStyles.cart}>
          <AntDesign name="shoppingcart" size={20} color="#587bcc" />
        </View>
      </View>
      <Text style={globalStyles.jacketText}>Men's Jacket</Text>
      <View style={globalStyles.search}>
        <Text style={globalStyles.searchJacket}>Search Jacket</Text>
        <Text style={globalStyles.filter}>Filter </Text>
      </View>
      <Data />
    </ScrollView>
  );
}

// <View>
//     <SingleJacket />
// </View>

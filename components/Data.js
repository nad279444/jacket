import React from "react";
import { View, FlatList, Image, } from "react-native";
import Jackets from "./Jackets";
import { globalStyles } from "../styles/global";


export default function Data() {
  const JacketsData = [
    {
      name: "Nike Jacket Softshell Warm",
      image: (
        <Image
          source={require("../assets/images/nike.jpg")}
          style={globalStyles.image}
        />
      ),
      price: 1000,
      key: 45344657687868,
    },
    {
      name: "Office Jacket Cotton",
      image: (
        <Image
          source={require("../assets/images/white.jpg")}
          style={globalStyles.image}
        />
      ),
      price: 345,
      key: 45344632578186,
    },
    {
      name: "Black Jacket Hoddie",
      image: (
        <Image
          source={require("../assets/images/black.jpg")}
          style={globalStyles.image}
        />
      ),
      price: 243,
      key: 23454465766709,
    },
    {
      name: "Wizard Sleek Wool Jacket",
      image: (
        <Image
          source={require("../assets/images/wizard.jpg")}
          style={globalStyles.image}
        />
      ),
      price: 199,
      key: 34465745665286,
    },
    {
      name: "Winter Snow Jacket",
      image: (
        <Image
          source={require("../assets/images/white.jpg")}
          style={globalStyles.image}
        />
      ),
      price: 45,
      key: 45677467345569,
    },
  ];

  return (
    <View>
      <FlatList
        data={JacketsData}
        renderItem={({ item }) => {
          return (
            <Jackets name={item.name} image={item.image} price={item.price} />
          );
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}


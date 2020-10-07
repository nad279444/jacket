import React from "react";
import {  Text, View,} from "react-native";
import { globalStyles } from "../styles/global";
import Star from "./Star"



export default function Jackets({name,image,price}) {
  return (
    
      <View style={globalStyles.imageContainer} >
          {image}
          <View style={globalStyles.imageDetails}>
              <Text style={globalStyles.name}>{name}</Text>
              <Text style={globalStyles.star}><Star /></Text>
              <Text style={globalStyles.price}>${price}</Text>
          </View>
          

      </View>
      
  
  );
}


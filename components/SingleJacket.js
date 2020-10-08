import { ScrollView,View,StyleSheet, Text,Image } from "react-native";
import { AntDesign,Feather } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import React from "react";
import Star from "./Star"

export default function SingleJackets() {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.iconContainer}>
        <View style={globalStyles.arrow}>
          <AntDesign name="arrowleft" size={20} color="black" />
        </View>
        <View style={globalStyles.cart}>
          <AntDesign name="shoppingcart" size={20} color="#587bcc" />
        </View>
        <View style={styles.love}>
          <Feather name="heart" size={20} color="#587bcc" />
        </View>
      </View>
      <Image source={require('../assets/images/wizard.jpg')} style={styles.image}/>
      <Text style={styles.jactketText}>Wizard Sleek Wool Jacket</Text>
      <Text style={styles.star}>Review : <Star /></Text>
      <View style={styles.bar}></View>
      <Text style={styles.text}>A jacket typically has sleeves, and fastens </Text>
      <Text style={styles.text}>A jacket is a mid-stomach–length garment for the upper body.</Text>
      <View style={styles.tagContainer}>
          <Text style={styles.tag}>Material : 91% polyester, 9% elastane</Text>
      </View>
      <View style={styles.boxContainer}>
            <Text style={styles.box}>XS</Text>
            <Text style={styles.box}>S</Text>
            <Text style={styles.bluebox}>M</Text>
            <Text style={styles.box}>L</Text>
            <Text style={styles.box}>XL</Text>
      </View>
      <View style={styles.bigbox}>
              <Text style={styles.total}>Total Amount</Text>
              <Text style={styles.amount}>$110</Text> 
          <View style={styles.smallbox}>
              <Text style={styles.add}>  Add to Cart</Text>
          </View>
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    image : {
        width: 250,
        height: 250,
        marginVertical: 10,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius : 20,
        borderTopRightRadius : 30,
        marginLeft: 40,
        
    },
    love : {
        width: 30,
        height: 30,
        borderColor:'black',
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 40,
        left: 283
        
      },
      star : {
          marginLeft: 2,
          marginTop: 5,
          marginBottom: 25
      },
      jactketText : {
          fontSize: 20,
          fontWeight: 'bold'
      },
      bar : {
          width: 50,
          height: 5,
          backgroundColor: '#587bcc',
          borderRadius: 10,
          marginBottom: 10
      },
      text: {
          marginVertical: 5,
          fontSize: 10
      },
      tagContainer : {
          width: 200,
          height: 40,
          backgroundColor: 'white',
          marginLeft: -10,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: -50

      },
      tag: {
          color: '#587bcc',
          fontSize: 10
      },
      box: {
          width: 35,
          height: 35,
          borderColor: 'black',
          backgroundColor: 'white',
          marginLeft: 10,
          paddingTop: 10,
          paddingLeft: 13,
          color:'black',
          fontWeight: 'bold',
          borderRadius: 5,
          fontSize: 10
          
         
      },
      
      
      bluebox: {
        width: 35,
        height: 35,
        borderColor: 'black',
        backgroundColor: '#93cbed',
        marginLeft: 10,
        paddingLeft: 13,
        paddingTop: 10,
        color: 'black',
        fontSize: 10,
        borderRadius: 5,
        fontWeight: 'bold'
      },
      boxContainer: {
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -110
      },
      bigbox : {
          width: 300,
          height: 70,
          backgroundColor: '#587bcc',
          justifyContent: 'center',
          padding: 10,
          borderRadius: 20 ,
          marginVertical: 10,
          


        
      },
      smallbox: {
          width: 100,
          height: 40,
          borderRadius: 10,
          backgroundColor: '#031745',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 15,
          left: 180

      },
      total : {
          color : 'white',
          fontSize: 10
      },
      amount : {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold'
      },
      add: {
        color: 'white', 
      }

}) 
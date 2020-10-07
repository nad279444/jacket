import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
      padding: 24,
      backgroundColor:'#f7f5f5',
  
    
    },
    iconContainer : {
      flexDirection: 'row',
  
  
    },
    cart : {
      marginLeft: 250,
      width: 30,
      height: 30,
      borderColor:'black',
      backgroundColor: 'white',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
      
    
      
    },
    
    arrow : {
      marginLeft: 2,
      width: 30,
      height: 30,
      borderColor:'black',
      backgroundColor: 'white',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems:'center'
    },
    search: {
      width: 310,
      height: 50,
      borderColor: 'black',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      marginVertical: 25,
    },
    searchJacket : {
      fontSize: 13,
      color: '#a6a9ad',
      fontWeight: 'bold'
    },
    filter: {
      fontSize: 13,
      color: '#0d43bf',
      marginLeft: 180,
      fontWeight: 'bold'
  
    },
    jacketText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
        borderRadius: 10
      },
      imageContainer : {
          flexDirection: 'row'
      },
      imageDetails : {
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 10
          
      },
      name: {
        marginLeft: 16,
        fontSize: 14,
        fontWeight: 'bold', 
      },
      price: {
        marginLeft: 16,
        color: "blue",
        fontSize: 18,
        fontWeight: 'bold'
      },
      star: {
        marginLeft: 16,
      }
    
  });
  
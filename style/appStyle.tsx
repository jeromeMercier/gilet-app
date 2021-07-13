import { StyleSheet } from 'react-native'
  
 const styles = StyleSheet.create({   
   container: {                       
     marginTop: 150,
     backgroundColor: '#ededed',
     flexWrap: 'wrap'
   }
 })
  
 const buttons = StyleSheet.create({  
   primary: {                         
     flex: 1,
     height: 70,
     backgroundColor: 'red',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20
   }
 })

 const MyTheme = {
    dark: false,
    colors: {
        primary: '#FFC325',
        secondary: '#BCBDBE',
        black: 'rgb(0, 0, 0)',
    },
  };
  
 export { styles, buttons, MyTheme }
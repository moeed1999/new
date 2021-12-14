import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

   container:{
       flex:1,
       width:'100%',
    //    justifyContent:'center',
    //    alignItems:'center',
       padding:7,
       flexDirection:'column'
   },
   header:{
       backgroundColor:'indianred',
       width:'100%',
       justifyContent:'center',
       alignItems:'center',
       padding:7,
       borderRadius:5,
    //    flex:1
       
   },
   headertext:{
       color:'white',
       fontSize:30,
       fontWeight:'bold'
   },
   remainder:{
    //    marginTop:5
    flex:1,
    alignContent:'flex-start',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
        

   },
   options:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
   },
   optiontexts:{
    textAlign:'left',
    color:'indianred',
    fontSize:17
   }


});

export default styles;
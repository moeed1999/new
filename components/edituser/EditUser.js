import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Pressable,
    
  } from 'react-native';
import { Caption } from 'react-native-paper';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

function EditUser({navigation}) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headertext}>
                    Edit Profile
                </Text>

            </View> */}
{/* header complete */}

            <View style={styles.remainder}>
                
                
                <Caption style={{ textAlign:'center',fontSize:17}}> 
                    choose any one of the options
                </Caption>
                
{/* different options */}
                <View style={styles.options}>
                <Pressable      
            onPress={
                ()=> 
                navigation.navigate('ChangeUserName')
              }>
          <Text style={styles.optiontexts}>
              change username
          </Text>
          </Pressable>
          <Pressable      
            onPress={
                ()=> 
                navigation.navigate('ChangePassword')
              }>
          <Text style={styles.optiontexts}>
              change password
          </Text>
          </Pressable>
          <Pressable      
            onPress={
                ()=> 
                navigation.navigate('ChangeProfile')
              }>
          <Text style={styles.optiontexts}>
              change profile picture
          </Text>
          </Pressable>
                </View>
                
            </View>
        </View>
    )
}

export default EditUser

import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { ProfilePicture } from '../components/ProfilePicture';
import {Username} from '../components/Username';
import { Biography } from '../components/Biography';

export default function Profile() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{flex:1, alignItems: 'center'}}> 
        <ProfilePicture></ProfilePicture>
        <Username style={styles.userName}>Username</Username> 
        <Text style={styles.userEmail}>username@email.com</Text>
        <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.editButton}> 
        <Text style={styles.editButtonText}>EDIT</Text> 
        </TouchableOpacity> 
      </View>

      <View style={{
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15, }}>

        <View>
        <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
        <Text style={styles.filterButtonsText}>Algebra</Text> 
        </TouchableOpacity> 
        </View>
        <View>
        <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
        <Text style={styles.filterButtonsText}>Coding</Text> 
        </TouchableOpacity> 
        </View>
        <View>
        <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.filterButtons}> 
        <Text style={styles.filterButtonsText}>Filters</Text> 
        </TouchableOpacity> 
        </View>
       
       </View>
       
       <Biography 
       description='Covjek hoce pare, daj mu pare.'
       location='Sarajevo, BiH' university='SSST' cost='daj pare' />


      {/* <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      /> */}
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
    padding:20,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  userName: {
    fontSize: 23,
    fontWeight: 'bold',
    padding: 2,
  },
  userEmail: {
    fontSize: 17,
    fontWeight: '100',
    padding: 5,
  },
  editButton: {
    marginTop: 5,
    padding: 3,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 13,
    borderWidth: 1,
  },
  editButtonText: {
    fontSize: 17,
    color: 'grey',
    fontWeight:'500',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  filterButtons: {
    marginTop:20,
    padding: 3,
    backgroundColor: 'grey',
    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 1,
  },
  filterButtonsText: {
    padding:5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

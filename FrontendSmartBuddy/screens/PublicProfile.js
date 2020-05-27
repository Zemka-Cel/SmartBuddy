import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { ProfilePicture } from '../components/ProfilePicture';
import {Username} from '../components/Username';
import { Biography } from '../components/Biography';

export default function PublicProfile({route, navigation}) {
  const { name } = route.params;
  const { email } = route.params;
  const { price } = route.params;
  const { bio } = route.params;
  const { faculty } = route.params;
  const { location } = route.params;



  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{flex:1, alignItems: 'center'}}> 
        <ProfilePicture></ProfilePicture>
        <Username style={styles.userName}>{JSON.stringify(name)}</Username> 
        <Text style={styles.userEmail}>{JSON.stringify(email)}</Text>
      </View>

      <View style={{
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        }}>

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
        description={JSON.stringify(bio)}
        location={JSON.stringify(location)} university={JSON.stringify(faculty)} cost={JSON.stringify(price)} />

        <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.tutorButton}>
            <Text style={styles.tutorButtonText}>Contact tutor</Text>
        </TouchableOpacity>


  
    </ScrollView>
  );
}

PublicProfile.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  tutorButton: {
    backgroundColor: 'rgba(255,71,105, 1)',
    alignItems: 'stretch',
    borderRadius: 10,
    marginTop: 35,
  },
  tutorButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 15,
  },
  filterButtons: {
    padding: 3,
    backgroundColor: '#f3f3f3',
    borderColor: '#f3f3f3',
    borderRadius: 20,
    borderWidth: 1,
  },
  filterButtonsText: {
    padding:5,
    paddingLeft: 25,
    paddingRight: 25,
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

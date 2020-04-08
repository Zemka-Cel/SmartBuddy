import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView} from 'react-native';
import { Input } from 'react-native-elements';


export default function TutorList() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Tutors</Text>
          <Input containerStyle={{backgroundColor:'#f5f5f0', borderRadius: 15}} placeholder='Search here...'/>
        
        <View style={{
        flex: 1,
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
 </View>

          
          
      
      
      

        
        </ScrollView>

     
    </View>
    
  );
}

TutorList.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    padding: 20,
    justifyContent: 'space-evenly',
  },
  welcomeContainer: {
    alignItems: 'stretch',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 23,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  categoriesText: {
    fontSize: 23,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    paddingBottom:10,

  },
  welcomeDescription: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left',
  },
  tutorButton: {
    backgroundColor: 'rgba(255,71,105, 1)',
    alignItems: 'stretch',
    borderRadius: 10,
    marginTop: 5,
  },
  tutorButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 15,
  },
  categoriesContainer: {
    paddingTop: 10,
    paddingBottom:10,
  },
  categoriesCard: {
    borderRadius: 10,
    width: 150,
    height: 150,
    resizeMode:'contain',
    flex: 1,
    
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  filterButtons: {
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

  
});

import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import { Assets } from '@react-navigation/stack';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hi, user!</Text>
          <Text style={styles.welcomeDescription}>Connect with your future tutor.</Text>
          <TouchableOpacity onPress={() => Alert.alert('Hvala :D')} style={styles.tutorButton}>
            <Text style={styles.tutorButtonText}>Find your tutor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Categories</Text>
          
          {/* <Image
            style={styles.categoriesCard}
            source={{
              uri: 'https://cdn.mos.cms.futurecdn.net/xYiTisbsp2HZPVupAZoNYQ-1024-80.jpg',
            }}
          />
          <Image
            style={styles.categoriesCard}
            source={{
              uri: 'https://miro.medium.com/max/3340/0*jmrpnXe-djmTh37l.',
            }}
          />
          <Image
            style={styles.categoriesCard}
            source={{
              uri: 'https://cdn.mos.cms.futurecdn.net/xYiTisbsp2HZPVupAZoNYQ-1024-80.jpg',
            }}
          /> */}
        </View>
      
      <View style={{
        flex: 1,
        flexDirection: 'column',
        
        justifyContent: 'space-between', }}>
          
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', }}>

        <View>
        <Image
            style={styles.categoriesCard}        
            source={ require('../assets/images/math.jpg')}
          />  
          </View>
          <View>  
        <Image
            style={styles.categoriesCard}
            source={ require('../assets/images/coding.jpg')}
          />  
          </View> 
        
        </View>
        <View style={{height: 20}}></View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', }}>

<View>
        <Image
            style={styles.categoriesCard}
            source={ require('../assets/images/math.jpg')}
          />  
          </View>
          <View>  
        <Image
            style={styles.categoriesCard}
            source={ require('../assets/images/math.jpg')}
          />  
          </View> 
        
        </View>
        <View style={{height: 20}}></View>
        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', }}>

<View>
        <Image
            style={styles.categoriesCard}
            source={ require('../assets/images/math.jpg')}
          />  
          </View>
          <View>  
        <Image
            style={styles.categoriesCard}
            source={ require('../assets/images/math.jpg')}
          />  
          </View> 
        
        </View>
      </View>

        {/* <View style={styles.getStartedContainer}>
          
          <Text style={styles.getStartedText}>Open up the code for this screen:</Text>

          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change any of text, save the file, and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View> */}
        </ScrollView>

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View> */}
    </View>
    
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

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
});

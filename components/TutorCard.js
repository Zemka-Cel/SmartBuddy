import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export function TutorCard(props) {
  return  (
      <View style={styles.tutorCardContainer}>
          <Image 
            style={styles.tutorCardImage}
            source={{
                uri: 'https://www.jutarnji.hr/incoming/meme-spock.jpg/3528305/alternates/LANDSCAPE_780/meme-spock.jpg',
            }}/>
            <View style={styles.textContainer}>
                <Text style={styles.tutorCardName}>{props.name}</Text>
                <Text style={styles.tutorCardDescription}>{props.description}</Text>
                <Text style={styles.viewButton}>View</Text>
            </View>
      </View>

  );
}

const styles = StyleSheet.create({
    tutorCardContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#d3d3d3',
        borderRadius: 20,
        height: 100,
        marginBottom: 12,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 3,
    },
    tutorCardImage:{
        borderRadius: 20,
        height: 100,
        width: 100,
    },
    tutorCardName: {
        fontWeight: '400',
        fontSize: 18,
        padding: 5,
    },
    tutorCardDescription: {
        fontWeight: '200',
        fontSize: 16,
        padding: 5, 
    },
    viewButton: {
        fontWeight: '400',
        fontSize: 18,
        color: 'rgba(255,71,105, 1)',
        padding: 5,
    },
});

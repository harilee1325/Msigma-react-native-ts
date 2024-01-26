import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Constants from '../utils/Constants';

interface myCourseInterface {
  id: string;
  name: string;
  fee: string;
}
[];

const MyCourseResultList: React.FC = props => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: Constants.COLOR_BG_MAIN}}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
        data={props.results.subjects}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{flex: 0.5}}
              onPress={() => {
                //navigation.navigate('SubjectList', {id: item.id});
              }}>
              <CourseCard name={item.name} short={item.fee} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const CourseCard = ({name, short}) => {
  return (
    <View style={btechCard.card}>
      <View style={btechCard.iconContainer}>
        <Image
          source={require('../assets/engineering-icon.png')}
          style={btechCard.icon}
        />
      </View>
      <View style={btechCard.textContainer}>
        <Text style={btechCard.titleText}>{short}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={btechCard.descriptionText}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const btechCard = StyleSheet.create({
  card: {
    flex: 0.5,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden', // Ensures the border radius is applied
    borderWidth: 1, // Add border for visibility
    borderColor: '#ddd', // Border color
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#D4D4D4',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 10, // Adjust the elevation value as needed
        shadowColor: '#D4D4D4',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: 'white', // Set the background color as needed
      },
    }),
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    width: 40, // Adjust the width of the icon
    height: 40, // Adjust the height of the icon
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 5,
  },
});

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default MyCourseResultList;

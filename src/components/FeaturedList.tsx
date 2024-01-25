import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Platform} from 'react-native';

interface featuredListData {
  title: string;
  results: Result;
}

export type Result = {
  branch: string;
  desc: string;
  image: string;
  price: string;
  subjectId: string;
}[];

const FeaturedList: React.FC<featuredListData> = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.results}
        keyExtractor={result => result.subjectId}
        renderItem={({item}) => {
          return featuredCard(item.branch, item.desc, item.image, item.price);
        }}
      />
    </View>
  );
};

const featuredCard = (branch, name, imageLink, price) => {
  return (
    <View style={featuredCardStyles.card}>
      <Image
        source={{uri: imageLink}} // Replace with your image URL
        style={featuredCardStyles.image}
        resizeMode="cover"
      />
      <Text style={featuredCardStyles.smallText}>{branch}</Text>
      <Text style={featuredCardStyles.priceText}>{`Rs: ${price}`}</Text>
      <Text style={featuredCardStyles.bigText}>{name}</Text>
    </View>
  );
};

const featuredCardStyles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    margin: 10,
    width: 200,
    borderWidth: 1, // Add border for visibility
    borderColor: '#ddd', // Border color
    ...Platform.select({
      ios: {
        shadowColor: '#D4D4D4',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 2, // Adjust the elevation value as needed
        shadowColor: '#D4D4D4',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: 'white', // Set the background color as needed
      },
    }),
  },
  image: {
    width: '100%',
    height: 170, // Adjust the height based on your design
    resizeMode: 'cover',
  },
  smallText: {
    fontSize: 14,
    padding: 5,
    paddingTop: 10,
  },
  bigText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingStart: 5,
    paddingEnd: 5,
    paddingBottom: 10,
  },
  priceText: {
    fontSize: 16,
    paddingStart: 5,
    paddingEnd: 5,
    paddingBottom: 10,
  },
});

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default FeaturedList;

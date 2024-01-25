import {React, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const SubjectListScreen = ({route}) => {
  let id = route.params.id;
  return (
    <View>
      <Text>Hello welcome to subject list screen {id}</Text>
    </View>
  );
};

export default SubjectListScreen;

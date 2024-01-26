import React = require('react');
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FeaturedList from '../components/FeaturedList';
import ResultsList from '../components/ResultsList';
import {getRequest, getRequestFeatured} from '../hooks/ContentApi';
import Constants from '../utils/Constants';
import {getItem} from '../utils/Utils';
import {DrawerActions} from '@react-navigation/native';
import DrawerHeader from '../components/DrawerHeader';

const HomeScreen: React.FC = () => {
  const [branchList, setBranchList] = useState<any[]>([]);
  const [featureList, setFeaturedList] = useState<any[]>([]);
  

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const {success, statusCode, contentResp, errorMessage} =
          await getRequest('btech/v2/branches');
        if (success) {
          console.log('Data is ' + contentResp);
          setBranchList(contentResp);
        } else {
          console.error('Error:', errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBranches(); // Call the async function immediately

    const fetchFeaturedList = async () => {
      try {
        const {success, statusCode, contentResp, errorMessage} =
          await getRequestFeatured('featured.json');
        if (success) {
          console.log('Data is ' + contentResp);
          setFeaturedList(contentResp);
        } else {
          console.error('Error:', errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFeaturedList(); // Call the async function immediately

    // Add any dependencies if needed in the dependency array
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Constants.COLOR_BG_MAIN}
        barStyle="dark-content"
      />

      <ScrollView>
        <DrawerHeader title={'Home'} />
        <FeaturedList title={'Featured List'} results={featureList} />

        <ResultsList title={'Branches'} results={branchList} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.BASEURL,
  },
  mainText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 100,
  },
});

export default HomeScreen;

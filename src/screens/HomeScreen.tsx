import React, {useState, useRef} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FeaturedList from '../components/FeaturedList';
import ResultsList from '../components/ResultsList';
import {getRequest, getRequestFeatured} from '../hooks/ContentApi';
import Constants from '../utils/Constants';
import {getItem} from '../utils/Utils';

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
      <ScrollView>
        <FeaturedList title={'Featured List'} results={featureList} />

        <ResultsList title={'Branches'} results={branchList} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 100,
  },
});

export default HomeScreen;

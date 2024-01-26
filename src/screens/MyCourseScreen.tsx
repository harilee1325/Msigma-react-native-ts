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
import {userData} from '../context/userDataSlice';
import {useDispatch, useSelector} from 'react-redux';
import MyCourseResultList from '../components/MyCourseResultList';

const MyCourseScreen: React.FC = () => {
  const [myCourseList, setMyCourseList] = useState<any[]>([]);
  const token = useSelector((state: any) => state.userDataReducer.token);
  const studentId = useSelector((state: any) => state.userDataReducer.id);

  useEffect(() => {
    const getMyCourse = async () => {
      try {
        const {success, statusCode, contentResp, errorMessage} =
          await getRequest(`btech/subjects/all/${studentId}/${token}`);
        if (success) {
          setMyCourseList(contentResp);
        } else {
          console.error('Error:', errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getMyCourse(); // Call the async function immediately
    // Add any dependencies if needed in the dependency array
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Constants.COLOR_BG_MAIN}
        barStyle="dark-content"
      />

      <ScrollView>
        <DrawerHeader title={'My Course'} />
        <MyCourseResultList
          title={'Subscribed Courses'}
          results={myCourseList}
        />
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

export default MyCourseScreen;

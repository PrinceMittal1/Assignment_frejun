import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import addingalldata from '../redux/actions';
import {addingmoredata} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import RenderItem from './RenderItem';
import {useIsFocused} from '@react-navigation/native';
import homestyles from '../styles/hometabstyles';

const Home = () => {
  const isfocus = useIsFocused();
  const [pagenumber, setpagenumber] = useState(1);
  const dispatch = useDispatch();

  // getting data from redux for using in flatlist
  const myuserdata = useSelector(state => state);

  // for fetching data from api
  const fetchingdata = async (page, expresion) => {
    const res = await fetch(
      `https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users?page=${page}&limit=10`,
    );
    const data = await res.json();
    if (data && expresion == 'firsttime') {
      addingalldata(data, dispatch);
    } else if (data && expresion == 'moredata') {
      addingmoredata(data, dispatch);
    }
  };

  useEffect(() => {
    fetchingdata(1, 'firsttime');
    setpagenumber(1);
  }, [isfocus]);

  // key extractor for flat list
  const keyExtractor = (item, index) => index.toString();

  return (
    <View>
      {/* button to Refresh the page  */}
      <View>
        <View style={homestyles.refresh_button_outer}>
          <Pressable
            onPress={() => {
              setpagenumber(1);
              fetchingdata(1, 'firsttime');
            }}>
            <View style={homestyles.refresh_button_box}>
              <Text style={homestyles.refresh_button_text}>Refresh Page</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* data will be render with the help of flatlist */}
      <View style={{}}>
        <FlatList
          data={myuserdata}
          keyExtractor={keyExtractor}
          renderItem={RenderItem}
          maxToRenderPerBatch={10}
          onEndReached={() => {
            fetchingdata(pagenumber + 1, 'moredata');
            setpagenumber(prev => prev + 1);
          }}
        />
      </View>

      <View>
        <Text style={{color: 'red'}}>{pagenumber}</Text>
      </View>
    </View>
  );
};

export default Home;

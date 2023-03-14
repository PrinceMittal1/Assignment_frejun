import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import addingalldata from '../redux/actions/addingallactions';
import addingmoredata from '../redux/actions/addingmoreaction';
import {useDispatch, useSelector} from 'react-redux';
import RenderItem from './RenderItem';
import {useIsFocused} from '@react-navigation/native';
import homestyles from '../styles/hometabstyles';
import onScroll from '../functions/scroling';

const Home = () => {
  const isfocus = useIsFocused();
  const [pagenumber, setpagenumber] = useState(1);
  const [pagerender, setpageRender] = useState(1);
  const dispatch = useDispatch();


  const myuserdata = useSelector(state => state);

  
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


  const keyExtractor = (item, index) => index.toString();


  return (
    <View>


      <View style={homestyles.topbar}>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontSize: 20}}>
            Page Number: {pagerender}
          </Text>
        </View>

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

      <View>
        <FlatList
          data={myuserdata}
          keyExtractor={keyExtractor}
          renderItem={RenderItem}
          maxToRenderPerBatch={10}
          onEndReachedThreshold={0.1}
          onScroll={event => {
            onScroll(event, setpageRender);
          }}
          onEndReached={() => {
            fetchingdata(pagenumber + 1, 'moredata');
            setpagenumber(prev => prev + 1);
          }}
        />
      </View>


    </View>
  );
};

export default Home;

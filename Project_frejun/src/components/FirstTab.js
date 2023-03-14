import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useState, useEffect} from "react"
import addingalldata from '../redux/actions';
import { addingmoredata } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import RenderItem from './RenderItem';
import { useIsFocused } from '@react-navigation/native';




const Home = () => {
  const isfocus = useIsFocused();
  const [pagenumber, setpagenumber] = useState(1);
  const dispatch = useDispatch();


  // getting data from redux for using in flatlist 
  const myuserdata = useSelector(state => state);


  // for fetching data from api
  const fetchingdata = async (page , expresion) =>{
    console.log(page , expresion);
    const res = await fetch(`https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users?page=${page}&limit=10`)
    const data = await res.json();
        if(data && expresion=="firsttime"){
          addingalldata(data, dispatch)
         }
        else if(data && expresion=="moredata"){
          addingmoredata(data, dispatch)
        }
  }

  useEffect(()=>{
    fetchingdata(1, "firsttime");
    setpagenumber(1);
  },[isfocus])

  // key extractor for flat list
  const keyExtractor = (item, index) => index.toString();

  return (
    <View>

      {/* button to Refresh the page  */}
      <View>
          <View style={styles.refresh_button_outer}>
            <Pressable onPress={()=>{
              setpagenumber(1);
              fetchingdata(1, "firsttime")
            }}>
              <View style={styles.refresh_button_box}>
                 <Text style={styles.refresh_button_text}>Refresh Page</Text>
              </View>
            </Pressable> 
          </View>
      </View>


      {/* data will be render with the help of flatlist */}
      <View style={{height:600}}>
        <FlatList 
        data={myuserdata}
        keyExtractor={keyExtractor}
        renderItem={RenderItem}
        maxToRenderPerBatch={10}
        onEndReached={()=>{
          setpagenumber(prev => prev+1);
          fetchingdata(pagenumber, "moredata");
        }}
        />
      </View>

      <View>
        <Text style={{color:"red"}}>{pagenumber}</Text>
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  refresh_button_outer:{
    width:"30%", 
    height:40, 
    alignSelf:"flex-end", 
    margin:15
  },
  refresh_button_box:{
    backgroundColor:"#1D3932", 
    borderRadius:15, 
    height:40, 
    alignItems:"center", 
    justifyContent:"center"
  },
  refresh_button_text:{
    color:"white", 
    fontSize:17
  }
})
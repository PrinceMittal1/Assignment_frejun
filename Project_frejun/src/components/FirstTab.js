import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useState, useEffect} from "react"
import addingalldata from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import RenderItem from './RenderItem';




const Home = () => {
  const [pagenumber, setpagenumber] = useState(1);
  const dispatch = useDispatch();


  // getting data from redux for using in flatlist 
  const myuserdata = useSelector(state => state);


  // for fetching data from api
  const fetchingdata = async () =>{
    const res = await fetch(`https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users?page=${pagenumber}&limit=10`)
    const data = await res.json();
        if(data){
            addingalldata(data, dispatch)
         }
  }


  useEffect(()=>{
    fetchingdata();
  },[])

  // key extractor for flat list
  const keyExtractor = (item, index) => index.toString();

  return (
    <View>

      {/* button to Refresh the page  */}
      <View>
          <View style={styles.refresh_button_outer}>
            <Pressable>
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
          setpagenumber(pagenumber+1);
          fetchingdata();
        }}
        />
      </View>

      <View>
        <Text>{pagenumber}</Text>
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
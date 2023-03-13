import {View, Text, TextInput, Pressable, FlatList} from 'react-native';
import RenderItem from './RenderItem';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react"

const SortingAndSearching = () => {
  const [nametosearch, setnametosearch] = useState(null);
  const DATA = useSelector(state => state);

  return (
    <View>

      <View style={{flexDirection:"row", gap:5, marginTop:10}}>


        <View style={{flex:5, marginLeft:5}}>
          <TextInput 
          style={{color:"black", fontSize:20, borderWidth:1, paddingLeft:5}}
          placeholder="Search By Name"
          placeholderTextColor="black"
          value={nametosearch}
          onChangeText={(t)=>{setnametosearch(t)}}
          />
        </View>


        <View style={{flex:1.5, justifyContent:"center"}}>
          <Pressable>
            <View style={{backgroundColor:"#1D3932", height:40, alignItems:"center", justifyContent:"center", borderRadius:15}}>
               <Text style={{color:"white"}}>Clear</Text>
            </View>
          </Pressable>
        </View>


        <View style={{borderWidth:1, flex:1.5}}>
          <Text>sort</Text>
        </View>


      </View>


     <View style={{marginTop:10}}>
        <FlatList 
         data={DATA}
         renderItem={RenderItem}
        />
     </View>


    </View>
  );
};

export default SortingAndSearching;

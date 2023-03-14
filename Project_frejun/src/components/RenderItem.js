import {View, Text, Image} from 'react-native';

function Stringtrimmer({data}) {
  let time = data.substring(0, 25);
  return (
      <Text style={{color: 'black', fontSize:18}}>{time}</Text>
  );
}

const RenderItem = ({item, index}) => (
  <View
    style={{
      padding: 10,
      borderWidth: 1,
      height: 80,
      borderRadius: 15,
      gap:10,
      flexDirection:"row",
      borderWidth: 1,
      margin: 10,
    }}>

    <View style={{flex:1, height:50, backgroundColor:"#1D3932", borderRadius:25, alignItems:"center", justifyContent:"center"}}>
      <Text style={{color:"white", fontSize:18}}>{item.id}</Text>
    </View>

    <View style={{flex:5, marginTop:-5}}>
       <View style={{flexDirection:"row", alignItems:"center"}}>
           <Text style={{color:"black"}}>Name:- </Text>
           <Stringtrimmer data={item.name}/>
       </View>
       <View style={{flexDirection:"row", alignItems:"center"}}>
          <Text style={{color:"black"}}>Email:-  {item.email}</Text>
       </View>
    </View>

  </View>
);

export default RenderItem;

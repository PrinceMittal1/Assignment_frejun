import {View, Text, Image} from 'react-native';

function Newew({data, tempdata}) {
  let time = data.substring(12, 19);
  return (
    <View>
      <Text style={{color: 'black'}}>{time}</Text>
    </View>
  );
}

const RenderItem = ({item, index}) => (
  <View
    style={{
      padding: 10,
      borderWidth: 1,
      height: 80,
      borderRadius: 15,
      borderWidth: 1,
      margin: 10,
    }}>
    <Text style={{color: 'black'}}>Time Created At</Text>
    <Text style={{color: 'black'}}>
      {item.id} {item.name}
    </Text>
    <Newew data={item.createdAt} tempdata={item} />
  </View>
);

export default RenderItem;

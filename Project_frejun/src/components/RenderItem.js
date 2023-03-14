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
  <View style={{padding: 10, borderWidth: 1, height: 80}}>
    <Text style={{color: 'black'}}>Time Created At</Text>
    <Text style={{color: 'black'}}>
      {item.id} {item.name}
    </Text>
    <Newew data={item.createdAt} tempdata={item} />
  </View>
);

export default RenderItem;

// {"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nickfratter/128.jpg",
// "createdAt": "2019-02-16T19:30:48.101Z",
// "id": "25",
// "name": "Leif McCullough"},

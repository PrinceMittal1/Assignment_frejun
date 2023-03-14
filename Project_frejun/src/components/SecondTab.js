import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RenderItem from './RenderItem';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import forsorting from '../functions/sorting';

const SortingAndSearching = () => {
  const [nametosearch, setnametosearch] = useState(null);
  const [Data, setData] = useState(null);
  const [Dataforflatlist, setDataforflatlist] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchingdata = async () => {
    const res = await fetch(
      `https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users?page=1&limit=20`,
    );
    const data = await res.json();
    if (data) {
      setData(data);
      setDataforflatlist(data);
    }
  };

  function forsorting(val) {
    let newdata = Data.sort(function (a, b) {
      if (val === 'lowtohigh') {
        return b.id - a.id;
      } else if (val === 'hightolow') {
        return a.id - b.id;
      }
    });
    console.log(Dataforflatlist);
    setData([...newdata]);
    console.log(Dataforflatlist);
  }

  function debouncing(data) {
    let timerid;
    return function (value) {
      if (timerid) {
        clearTimeout(timerid);
      }
      timerid = setTimeout(() => {
        const result = data.filter(item => item.name.includes(value));
        setData([...result]);
      }, 1000);
    };
  }

  function search(value) {
    setnametosearch(value);
    debouncing(Dataforflatlist)(nametosearch);
  }

  useEffect(() => {
    fetchingdata();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const clearingfilterandsort = () => {
    setData(Dataforflatlist);
  };

  return (
    <View>
      <View style={styles.topbar}>
        <View style={{flex: 5, marginLeft: 5}}>
          <TextInput
            style={styles.inputbar}
            placeholder="Search By Name"
            placeholderTextColor="black"
            value={nametosearch}
            onChangeText={t => {
              search(t);
            }}
          />
        </View>

        <View style={styles.clearbuttonouter}>
          <Pressable onPress={clearingfilterandsort}>
            <View style={styles.clearbuttoninner}>
              <Text style={{color: 'white'}}>Clear</Text>
            </View>
          </Pressable>
        </View>

        <View style={{flex: 1.5}}>
          <Pressable onPress={toggleModal}>
            <View style={styles.sortbuttoninner}>
              <Text style={{color: 'white'}}>Sort</Text>
            </View>
          </Pressable>
          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}>
            <View style={styles.modalbox}>
              <Pressable
                onPress={() => {
                  forsorting('hightolow');
                  toggleModal();
                }}>
                <View style={styles.lowtohighbox}>
                  <Text style={{color: 'white'}}>Sort id low to high</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  forsorting('lowtohigh');
                  toggleModal();
                }}>
                <View style={styles.lowtohighbox}>
                  <Text style={{color: 'white'}}>Sort id in high to low</Text>
                </View>
              </Pressable>
            </View>
          </Modal>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <FlatList data={Data} renderItem={RenderItem} />
      </View>
    </View>
  );
};

export default SortingAndSearching;

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  inputbar: {
    color: 'black',
    fontSize: 20,
    borderWidth: 1,
    paddingLeft: 5,
    borderRadius: 10,
  },
  clearbuttonouter: {
    flex: 1.5,
    justifyContent: 'center',
  },
  clearbuttoninner: {
    backgroundColor: '#1D3932',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  sortbuttoninner: {
    backgroundColor: '#1D3932',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  modalbox: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginTop: 200,
    borderWidth: 1,
    backgroundColor: 'black',
    opacity: 0.75,
    gap: 20,
    padding: 20,
  },
  lowtohighbox: {
    backgroundColor: '#1D3932',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

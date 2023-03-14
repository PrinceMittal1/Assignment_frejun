import {StyleSheet} from 'react-native';

const homestyles = StyleSheet.create({
  refresh_button_outer: {
    width: '30%',
    height: 40,
    alignSelf: 'flex-end',
    margin: 15,
  },
  refresh_button_box: {
    backgroundColor: '#1D3932',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refresh_button_text: {
    color: 'white',
    fontSize: 17,
  },
  topbar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default homestyles;

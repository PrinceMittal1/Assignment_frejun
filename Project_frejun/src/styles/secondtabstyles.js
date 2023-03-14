import {StyleSheet} from 'react-native';

const secondtabstyles = StyleSheet.create({
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
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginTop: 200,
    borderWidth: 1,
    backgroundColor: '#1D3932',
    opacity: 0.75,
    gap: 20,
    padding: 20,
  },
  lowtohighbox: {
    backgroundColor: 'black',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default secondtabstyles;

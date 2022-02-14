import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    horizontal: false,
  },

  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  text: {fontWeight: 'bold', color: 'black'},
  price: {fontSize: 18, fontWeight: 'bold'},
  stock: {color: 'red', fontWeight: 'bold'},
  image_container: {align: 'center'},
});

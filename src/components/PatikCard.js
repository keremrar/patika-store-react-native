import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './PatikCard_style';
const PatikCard = ({store}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: store.imgURL}} />
      </View>
      <Text style={styles.text}>{store.title}</Text>
      <Text style={styles.price}>{store.price}</Text>
      {!store.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
    </View>
  );
};

export default PatikCard;

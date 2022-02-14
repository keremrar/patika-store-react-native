import React from 'react';
import {View, StyleSheet, FlatList, Text, TextInput} from 'react-native';
import store from './Store.json';
import PatikCard from './components/PatikCard';
function App() {
  const RenderStore = ({item}) => <PatikCard store={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATİKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
      <FlatList data={store} renderItem={RenderStore} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#B667F1',
    fontSize: 35,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#EEEEEE',
    margin: 9,
    backgroundColor: '#EEEEEE',
    padding: 5,
  },
});

export default App;

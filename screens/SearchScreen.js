import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {

    const SonucScreen = () => {
        // "sonuc" adlı sayfaya git
        navigation.navigate('Sonuc');
      };

  return (
    <View style={{ flex: 1,backgroundColor:'#f8f8ff', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search </Text>
      
      {/* Diğer İşlemler */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />

    {/* Başka Bir Sayfaya Git */}
    
    <View style={styles.btn1}>
    <Button  title="Car1" onPress={SonucScreen} />
    </View>
    <View style={styles.btn1}>
    <Button title="Car2" onPress={SonucScreen} />
    </View>
    <View style={styles.btn1}>
    <Button title="Car3" onPress={SonucScreen} />
    </View>
        </View>
  

  );
};



const styles = StyleSheet.create({
  
  btn1: {
    width: '20%',
    height: 40,
    backgroundColor: '#1e90ff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  
});

export default SearchScreen;

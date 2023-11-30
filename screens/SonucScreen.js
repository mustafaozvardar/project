import React from 'react';
import { View, Text, Button } from 'react-native';

const SonucScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1,backgroundColor:'#f8f8ff', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Results</Text>
      
      {/* Diğer İşlemler */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SonucScreen;

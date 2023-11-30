import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const SearchScreen = () => {
  const [locations, setLocations] = useState([]);
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);

  const fetchLocations = async () => {
    try {
      const bearerToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlicyIsImV4cCI6MTcwMTMzMjIxNn0.YoZKcESabwWI7lyXeWrn-HwC81PvRHDcUNCUoIliIGs';
      const response = await fetch('https://rentapi.ototur.com/api/v1/locations/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      const data = await response.json();
      setLocations(data.result.content);
      setFromLocation(data.result.content[0]);
      setToLocation(data.result.content[0]);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#f8f8ff' }}>
      <View style={{ width: '80%' }}>
        <Text style={styles.label}>From</Text>
        <Picker
          selectedValue={fromLocation}
          style={{ height: 40, marginBottom: 20, borderColor: '#000', backgroundColor: '#fff',borderRadius: 12 }}
          onValueChange={(itemValue) => setFromLocation(itemValue)}
        >
          {locations.map((location, index) => (
            <Picker.Item key={index} label={location.name} value={location} />
          ))}
        </Picker>
        <Text style={styles.label}>To</Text>
        <Picker
          selectedValue={toLocation}
          style={{ height: 40, marginBottom: 20, borderRadius: 12, borderColor: '#000', backgroundColor: '#fff' }}
          onValueChange={(itemValue) => setToLocation(itemValue)}
        >
          {locations.map((location, index) => (
            <Picker.Item key={index} label={location.name} value={location} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff', textAlign: 'center', }}>Search</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  button: {
    borderRadius: 12,
    width: 400,
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
  },
});

export default SearchScreen;
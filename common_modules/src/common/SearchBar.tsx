import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 15,
        // borderWidth: 1,
      }}>
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={{
          paddingHorizontal: 10,
          width: '100%',
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 10,
        }}
        onPress={handleSearch}>
        <Text style={{color: 'blue'}}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

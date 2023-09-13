import React from 'react';
import {fakeData} from '../utils/FakeData';
import {ScrollView, Text, View} from 'react-native';

const HorizontalScroll = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} l>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {fakeData.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  margin: 15,
                  borderWidth: 1,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                }}>
                <Text>{item.content}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalScroll;

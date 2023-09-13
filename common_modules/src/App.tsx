import HorizontalScroll from './common/HorizontalScroll';
import ModalChoose from './common/ModalChoose';
import MyCarousel from './common/Carousel';
import React, {useState} from 'react';
import TabViewExample from './common/TabViewExample';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';

const App = () => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <ScrollView horizontal={false}>
        <TabViewExample />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Common Modules
        </Text>

        <View
          style={{
            height: 300,
          }}>
          <MyCarousel />
        </View>
        <View
          style={{
            height: 300,
          }}>
          <HorizontalScroll />
        </View>

        {activeModal && <ModalChoose activeModal={activeModal} />}
        <Pressable
          style={{
            backgroundColor: 'red',
          }}
          onPress={() => setActiveModal(!activeModal)}>
          <Text style={{color: 'white'}}>Click Me</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

import React, {useRef, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TabScreen = ({tabLabel}) => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  return (
    <ScrollView style={styles.tabContent}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Text testID={`tab${tabLabel}-item${index}`}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const TabViewExample = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollViewRef = useRef(null);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  const scrollToTab = (index: any) => {
    setActiveTab(index);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * Dimensions.get('window').width,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => scrollToTab(index)}
            style={[styles.tab, activeTab === index && styles.activeTab]}>
            <Text
              style={
                activeTab === index ? styles.activeTabText : styles.tabText
              }>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const activeIndex = Math.floor(
            offsetX / Dimensions.get('window').width,
          );
          setActiveTab(activeIndex);
        }}>
        {tabs.map((tab, index) => (
          <TabScreen key={index} tabLabel={tab} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContent: {
    width: Dimensions.get('window').width,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  tab: {
    paddingHorizontal: 16,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    backgroundColor: 'crimson',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TabViewExample;

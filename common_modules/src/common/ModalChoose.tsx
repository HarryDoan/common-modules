import React, {useEffect, useState} from 'react';
import {Animated, Easing, Text, View} from 'react-native';

const ModalChoose = ({activeModal}) => {
  const [modalY] = useState(new Animated.Value(-400));

  useEffect(() => {
    if (activeModal) {
      Animated.timing(modalY, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalY, {
        toValue: 400,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  }, [activeModal]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        width: '100%',
        height: 400,
        bottom: modalY,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {activeModal ? <Text>Travel</Text> : <Text>NonTravel</Text>}
    </Animated.View>
  );
};

export default ModalChoose;

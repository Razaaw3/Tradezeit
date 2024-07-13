import CustomModal from '@/components/Modal/CustomModal';
import { interSemiBold32 } from '@/constants/Fonts';
import { StylesConstants } from '@/constants/StylesConstants';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, View,Text, TouchableOpacity } from 'react-native';



export default function HomeScreen() {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
   <View style={StylesConstants.mainContainer}>
      <Text style={[interSemiBold32(),{marginTop:112}]} onPress={showModal}>sad</Text>
      <CustomModal visible={visible} hideModal={hideModal} />
   </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

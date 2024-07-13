import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal, Portal, } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import { interMedium14, interMedium16 } from '@/constants/Fonts';

type Props = {
    visible : boolean
    hideModal : ()=>void

}

const CustomModal = (props: Props) => {

  return (
    <Portal>
    <Modal visible={props.visible} onDismiss={props.hideModal} contentContainerStyle={styles.containerStyle}>
      <View style={{flex:1}}>
        <Text style={interMedium14()}>Thursday, 25 March 2024</Text>
      </View>
    </Modal>
  </Portal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  containerStyle:{
    backgroundColor : Colors.background,
    height:'95%',
    borderColor:Colors.modalBorderColor,
    borderWidth:1,
    paddingHorizontal:12,
    paddingVertical:20,
    borderRadius:8,
    marginHorizontal:12
  }
})
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { interRegular16 } from '@/constants/Fonts'



const InputText = (props:TextInputProps) => {
  return (
    <TextInput
        {...props}
        style={[styles.input,props.style]}
        placeholderTextColor={Colors.textColor}
    />
  )
}

export default InputText

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor : Colors.inputBorderColor,
    width:'100%',
    paddingVertical:13,
    ...interRegular16(),
    paddingHorizontal:16,
    borderRadius : 8
  }
})
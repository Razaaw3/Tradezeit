import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { interMedium14 } from '@/constants/Fonts'
import { StylesConstants } from '@/constants/StylesConstants'
import { Link } from 'expo-router'

type Props = {
    title : string
    href : string

}

const CustomButton = (props: Props) => {
  return (
    <View style={styles.button}>
    <Link href={props.href} suppressHighlighting={true} style={{width:'100%',paddingVertical:12}}>
      <Text style={[interMedium14(Colors.textBlack),{textAlign:'center'}]}>{props.title}</Text>
      </Link>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        width:'60%',
        alignSelf:'center',
        backgroundColor : Colors.buttonColor,
        borderRadius:6,
        ...StylesConstants.colALLCenter,
        
    }
})
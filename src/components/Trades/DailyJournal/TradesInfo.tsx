import { StyleSheet, View } from 'react-native'
import React from 'react'
import { interRegular8, interMedium8 } from '@/constants/Fonts'
import { StylesConstants } from '@/constants/StylesConstants'
import { Typo } from '@/utils/RNText'
import { Colors } from '@/constants/Colors'

type Props = {
    size? : number
}

const TradesInfo = ({size}: Props) => {
  return (
    <View style={{...StylesConstants.rowJustifyBetween,columnGap:10}}>
         {/* <View style={{flex:1}}>
                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Total Trades</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>3</Typo>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Volume</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>345</Typo>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Commission</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>₹52.00</Typo>
                </View>
            </View>

            <View style={{flex:1}}>
                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>W/L</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>2/1</Typo>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Profit Factor</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>--</Typo>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Gross P&L</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>₹2,352.00</Typo>
                </View>
            </View> */}
            <View style={{flex:1}}>
                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Total Trades</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>3</Typo>
                </View>
                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Volume</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>345</Typo>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Commission</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>₹52.00</Typo>
                </View>
            </View>

            <View style={{flex:1}}>
                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>W/L</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>2/1</Typo>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Profit Factor</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>--</Typo>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Typo size={size?`interRegular10`:`interRegular8`} color={Colors.disabledWhite}>Gross P&L</Typo>
                    <Typo size={size?'interMedium10':'interMedium8'}>₹2,352.00</Typo>
                </View>
            </View>
            
    </View>
  )
}

export default TradesInfo

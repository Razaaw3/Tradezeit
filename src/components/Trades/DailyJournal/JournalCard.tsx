import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DocumentIcon from '@/assets/Icons/DocumentIcon'
import { StylesConstants } from '@/constants/StylesConstants'
import { Colors } from '@/constants/Colors'
import { interMedium10, interMedium8, interRegular14, interRegular8, interSemiBold12, interSemiBold32 } from '@/constants/Fonts'

type Props = {}

// <Text
// size={18}
// color={"textBlack"}
// text={skinCharacteristics?.[0]?.characteristics}
// />

const JournalCard = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerRow}>
            <Text style={interSemiBold12(Colors.greenProfit)}>Net P&L ₹2,300.00</Text>
            <View style={styles.dateContainer}>
                <Text style={interMedium10(Colors.secondaryWhite)}>Fri, Mar 12, 2024</Text>
                <DocumentIcon />
            </View>
        </View>

        <View style={[StylesConstants.rowJustifyBetween,{columnGap:10}]}>
            <View style={{flex:1}}>
                <Text>Chart</Text>
            </View>

            <View style={{flex:1}}>
                <View style={StylesConstants.rowJustifyBetween}>
                    <Text style={interRegular8(Colors.disabledWhite)}>Total Trades</Text>
                    <Text style={interMedium8(Colors.secondaryWhite)}>3</Text>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Text style={interRegular8(Colors.disabledWhite)}>Volume</Text>
                    <Text style={interMedium8(Colors.secondaryWhite)}>345</Text>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Text style={interRegular8(Colors.disabledWhite)}>Commission</Text>
                    <Text style={interMedium8(Colors.secondaryWhite)}>₹52.00</Text>
                </View>
            </View>

            <View style={{flex:1}}>
                <View style={StylesConstants.rowJustifyBetween}>
                    <Text style={interRegular8(Colors.disabledWhite)}>W/L</Text>
                    <Text style={interMedium8(Colors.secondaryWhite)}>2/1</Text>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Text style={interRegular8(Colors.disabledWhite)}>Profit Factor</Text>
                    <Text style={interMedium8(Colors.secondaryWhite)}>--</Text>
                </View>

                <View style={StylesConstants.rowJustifyBetween}>
                    <Text style={interRegular8(Colors.disabledWhite)}>Gross P&L</Text>
                    <Text style={interMedium8(Colors.secondaryWhite)}>₹2,352.00</Text>
                </View>
            </View>

            
        </View>
    </View>
  )
}

export default JournalCard

const styles = StyleSheet.create({
    container:{
        paddingBottom:6,
        paddingTop:12.5,
        paddingHorizontal:12,
        borderTopWidth:0.4,
        borderTopColor:Colors.disabledBlack,
    },
    headerRow:{
        ...StylesConstants.rowJustifyBetween,
        marginBottom:9
    },
    dateContainer:{
        ...StylesConstants.rowAllCenter,
        columnGap: 16.5
    }
})
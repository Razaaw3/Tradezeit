import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StylesConstants } from '@/constants/StylesConstants'
import { Typo } from '@/utils/RNText'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import TradesInfo from './TradesInfo'
import UpArrows from '@/assets/Icons/DailyJournal/UpArrows'
import DownArrows from '@/assets/Icons/DailyJournal/DownArrows'
import TradeTable from './TradeTable'

type Props = {}

const TradePopup = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <View style={StylesConstants.rowJustifyBetween}>
            <Typo size='interSemiBold14'>Daily Net Cumulative P&L</Typo>
            <Feather name='chevron-right' color={Colors.secondaryWhite} size={14} />
        </View>
        <View>
            <Typo>Chart</Typo>
        </View>
        <View>
            <TradesInfo size={10}/>
        </View>        
      </View>

      <View style={styles.tradeContainer}>
        <Typo style={{flex:1}}>Your Trades</Typo>
        <View style={{...StylesConstants.rowJustifyBetween,flex:1}}>
            <Ionicons name='search' color={Colors.primaryBlue} size={17} />
            <DownArrows />
            <UpArrows />
            <AntDesign name='delete' color={Colors.disabledBlue} size={17} />
            <Typo>Switch</Typo>
        </View>
      </View>
      <View style={{flex:1}}>
        <TradeTable />
      </View>

    </View>
  )
}

export default TradePopup

const styles = StyleSheet.create({
    container:{
        ...StylesConstants.simpleContainer
    },
    chartContainer:{
        // flex:1
    },
    tradeContainer:{
        paddingVertical:14,
        ...StylesConstants.rowJustifyBetween,
        borderWidth:0.4,
        borderColor: Colors.disabledBlack
    }
})
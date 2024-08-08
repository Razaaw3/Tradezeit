import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { Typo } from '@/utils/RNText'
import { tradingDataType } from '@/utils/types'
import DailyJournal from '@/app/(tabs)/(trades)/dailyJournal'
import DailyJournalStyles from './DailyJournal.styles'

type Props = {
    item : tradingDataType
}

const TradeTableCell = ({item}: Props) => {
  return (
    <DataTable.Row style={DailyJournalStyles.tableRow}>
              {/* <DataTable.Cell>
                <Checkbox
                  status={
                    checkedTasks.includes(item.id) ? "checked" : "unchecked"
                  }
                  onPress={() => toggleCheckbox(item.id)}
                  color={Color.brown}
                />
              </DataTable.Cell> */}
              <DataTable.Cell style={{flex:0.9}}>
                <Typo>{item.openTime}</Typo>
              </DataTable.Cell>
              <DataTable.Cell style={{flex:1,justifyContent:'center'}}>
                <Typo>{item.tradeSide}</Typo>
              </DataTable.Cell>
              <DataTable.Cell style={{flex:1.1 ,justifyContent:'center'}}>
                <Typo>{item.instrument}</Typo>
              </DataTable.Cell>
              <DataTable.Cell style={{flex:0.8,justifyContent:'center'}}>
                <Typo>{item.volume}</Typo>
              </DataTable.Cell>
              <DataTable.Cell style={{flex:1,justifyContent:'center'}}>
                <Typo>₹{item.netPL}</Typo>
              </DataTable.Cell>
              
            </DataTable.Row>
  )
}

export default TradeTableCell

const styles = StyleSheet.create({})
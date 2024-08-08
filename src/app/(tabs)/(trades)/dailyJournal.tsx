import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import JournalCard from '@/components/Trades/DailyJournal/JournalCard'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { StylesConstants } from '@/constants/StylesConstants'
import SearchBar from '@/components/Trades/SearchBar'
import BottomSheetScroll from '@/components/Modal/BottomSheetScroll'
import TradePopup from '@/components/Trades/DailyJournal/TradePopup'
import { BottomSheetScrollHandle } from '@/utils/types'

type Props = {}

const DailyJournal = (props: Props) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const bottomSheet =  useRef<BottomSheetScrollHandle>(null)

  const HandleBottomSheet = useCallback(() =>{
    bottomSheet.current?.handleBottomSheet()
  },[])

  
  return (
    <View style={StylesConstants.simpleContainer}>
      <View style={styles.searchContainer}>
        <Ionicons onPress={()=>setSearchVisible(!searchVisible)} style={{alignSelf:'flex-end'}} name="search" size={24} color={Colors.primaryBlue} />
        {searchVisible && <SearchBar setSearchVisible={setSearchVisible} />}
      </View>
      <FlatList
        data={[1,2,3,4]}
        renderItem={()=><JournalCard onPress={HandleBottomSheet}/>}
      />
      <BottomSheetScroll ref={bottomSheet} >
        <TradePopup />
      </BottomSheetScroll>
    </View>
  )
}

export default DailyJournal

const styles = StyleSheet.create({
  searchContainer:{
    paddingHorizontal:15.75,
    paddingVertical:13.72
  }
})
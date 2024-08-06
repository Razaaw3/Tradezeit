import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import JournalCard from '@/components/Trades/DailyJournal/JournalCard'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { StylesConstants } from '@/constants/StylesConstants'
import SearchBar from '@/components/Trades/SearchBar'

type Props = {}

const DailyJournal = (props: Props) => {
  const [searchVisible, setSearchVisible] = useState(false)
  return (
    <View style={StylesConstants.simpleContainer}>
      <View style={styles.searchContainer}>
        <Ionicons onPress={()=>setSearchVisible(!searchVisible)} style={{alignSelf:'flex-end'}} name="search" size={24} color={Colors.primaryBlue} />
        {searchVisible && <SearchBar setSearchVisible={setSearchVisible} />}
      </View>
      <FlatList
        data={[1,2,3,4]}
        renderItem={()=><JournalCard/>}
      />
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
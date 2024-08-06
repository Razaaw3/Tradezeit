import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

type Props = {}

const index = (props: Props) => {
  if(true)
    return(
<Redirect href={'/(tabs)'}/>)
}

export default index

const styles = StyleSheet.create({})
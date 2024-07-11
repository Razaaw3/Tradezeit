import {  Text, View } from 'react-native'
import React from 'react'
import { StylesConstants } from '@/constants/StylesConstants'
import { useForm, Controller } from "react-hook-form"
import InputText from '@/components/InputText'
import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'

type Props = {}

const SignIn = (props: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
        },
      })

      const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <>
    {/* <Stack.Screen options={{headerTitle:'Sin'}} /> */}
    <View style={[StylesConstants.mainContainer,StylesConstants.colALLCenter]}>
        <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <InputText 
                placeholder='Email'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholderTextColor={Colors.textColor}
            />
        )}
        name="firstName"
      />
      
    </View>
    </>
  )
}

export default SignIn


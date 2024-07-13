import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StylesConstants } from '@/constants/StylesConstants'
import { useForm, Controller } from "react-hook-form"
import InputText from '@/components/InputText'
import { Colors } from '@/constants/Colors'
import { interMedium16, interRegular14, interSemiBold32 } from '@/constants/Fonts'
import CustomButton from '@/components/CustomButton'

type Props = {}

const SignIn = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = handleSubmit((data) => console.log(data))
  return (
      <View style={styles.mainContainer}>
        <View style={{rowGap:10,alignSelf:'center'}}>
          <Text style={[interSemiBold32(),{textAlign:'center'}]}>Welcome</Text>
          <Text style={interMedium16()} >Sign in to Trade Pustika Platform</Text>
        </View>

        <View style={{rowGap:14}}>
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
                style={{marginBottom:14}}
                
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                placeholder='Password'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="password"
          />

          <Text style={[interRegular14(), { textAlign: 'right' }]}>Forget Password</Text>

        </View>

        <CustomButton href='./SignUp' title='Sign In' />

        <Text style={[interRegular14(),{textAlign:'center'}]}>Don’t have an account? <Text style={{ color: Colors.buttonColor }}>Sign Up</Text></Text>

      </View>
  )
}

export default SignIn


const styles = StyleSheet.create({
  mainContainer: {
    ...StylesConstants.mainContainer,
    justifyContent:'center',
    rowGap: 32
  }
})


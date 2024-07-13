import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StylesConstants } from '@/constants/StylesConstants'
import { useForm, Controller } from "react-hook-form"
import InputText from '@/components/InputText'
import { Colors } from '@/constants/Colors'
import { interMedium16, interRegular14, interSemiBold32 } from '@/constants/Fonts'
import CustomButton from '@/components/CustomButton'

type Props = {}

const SignUp = (props: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          email: "",
          password: "",
          userName : "",
          confirmPassword : "",
          firstName : '',
          lastName : ''
        },
      })
  return (
    <View style={styles.mainContainer}>
        <View style={{rowGap:10,alignSelf:'center'}}>
          <Text style={[interSemiBold32(),{textAlign:'center'}]}>Welcome to Trade Pustika</Text>
          <Text style={[interMedium16(),{textAlign:'center'}]} >We helps traders become profitable</Text>
        </View>

        <View style={{rowGap:12}}>

            <View style={[StylesConstants.rowJustifyBetween]}>
                <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                    placeholder='First Name'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={{width:'48%'}}
                    
                />
                )}
                name="firstName"
            />
            <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                placeholder='Last Name'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                style={{width:'48%'}}
              />
            )}
            name="lastName"
        />
            </View>

        <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                placeholder='User Name'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                
              />
            )}
            name="userName"
        />
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
                placeholder='Create Password'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="password"
          />

          <Text style={[interRegular14()]}>Instruction for the password creation</Text>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                placeholder='Repeat Password'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="confirmPassword"
          />


        </View>

        <CustomButton href='/(tabs)' title='Sign Up' />

        <Text style={[interRegular14(),{textAlign:'center'}]}>Already have an account? <Text style={{ color: Colors.buttonColor }}>Sign In</Text></Text>

      </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    mainContainer: {
        ...StylesConstants.mainContainer,
        justifyContent:'center',
        rowGap: 32
      }
})
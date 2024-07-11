import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import LoadAssets from '@/components/LoadAssets';
import images from '@/assets/images/index';
import { Text, View } from 'react-native';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const fonts = {
   'interRegular' : require('../assets/fonts/Inter-Regular.ttf'),
   'interMedium' : require('../assets/fonts/Inter-Medium.ttf'),
   'interBold' : require('../assets/fonts/Inter-Bold.ttf'),
   'interExtraBold' : require('../assets/fonts/Inter-ExtraBold.ttf'),
   'interSemiBold' : require('../assets/fonts/Inter-SemiBold.ttf')
  }

  return (
    <LoadAssets assets={images} fonts={fonts} >
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='auth' />
      </Stack>
        
    </LoadAssets>
  );
}

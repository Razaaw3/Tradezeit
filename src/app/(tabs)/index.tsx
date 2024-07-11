import { Link } from 'expo-router';
import { Image, StyleSheet, View,Text, TouchableOpacity } from 'react-native';



export default function HomeScreen() {
  return (
   <Link href={'./auth'}>
    <Text>sjadhkasjdhkasjhdjkashdkjash</Text>
   </Link>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

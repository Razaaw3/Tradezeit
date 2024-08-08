import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {};

const DownArrows = (props: Props) => {
  return (
    <View style={styles.container}>
      <Svg width="12" height="16" viewBox="0 0 12 16" fill="none">
        <Path
          d="M5.98634 0.800049V8.97481M5.98634 8.97481C5.98634 9.57025 6.21919 10.1444 6.63959 10.5858L11.0346 15.2M5.98634 8.97481C5.98634 9.57025 5.75354 10.1444 5.33312 10.5858L0.938101 15.2M4.42684 15.1303H0.857178V11.7362M11.1429 11.703V15.0971H7.57326"
          stroke="#2C497A"
          strokeWidth="1.4"
        />
      </Svg>
    </View>
  );
};

export default DownArrows;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems : 'center'
  },
});

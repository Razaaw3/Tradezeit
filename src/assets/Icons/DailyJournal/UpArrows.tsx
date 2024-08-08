import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {};

const UpArrows = (props: Props) => {
  return (
    <View>
      <Svg width="12" height="16" viewBox="0 0 12 16" fill="none">
        <Path
          d="M1.27496 15.9L0.355713 14.9807L4.33846 11.0077C4.69096 10.6551 4.94771 10.2941 5.10871 9.92498C5.26955 9.55581 5.34996 9.11348 5.34996 8.59798V2.57873L3.66546 4.27298L2.74621 3.35373L5.99996 0.0999756L9.25371 3.35373L8.33446 4.27298L6.64996 2.57873V8.59798C6.64996 9.11348 6.73363 9.55898 6.90096 9.93448C7.0683 10.3101 7.32821 10.6743 7.68071 11.027L11.6442 14.9807L10.725 15.9L5.99996 11.175L1.27496 15.9Z"
          fill="#2C497A"
        />
      </Svg>
    </View>
  );
};

export default UpArrows;



import { Colors } from '@/constants/Colors';
import React from 'react';
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

// import { Colors, getColor } from '@app/theme';

type Sizes = keyof typeof $sizeStyles;
type Presets = keyof typeof $presets;

export interface TextProps extends RNTextProps {
  text?: string | number;
  style?: StyleProp<TextStyle>;
  preset?: Presets;
  size?: Sizes;
  children?: React.ReactNode;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?:  string | any;
}

export function Typo(props: TextProps) {
  const {
    size,
    text,
    children,
    preset = 'default',
    style: $styleOverride,
    textAlign = 'auto',
    color,
    ...rest
  } = props;

  const content = text || children;

  const $styles = [
    $presets[preset],
    { textAlign } as TextStyle,
    $styleOverride,
  ];

  if (size) {
    $styles.push($sizeStyles[size]);
  }
  if (color) {
    $styles.push({ color: color });
  }

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

const $sizeStyles = {
  'interSemiBold12': { fontSize: 12, lineHeight: 16 , fontFamily:'interSemiBold' } as TextStyle,
  'interSemiBold14': { fontSize: 14, lineHeight: 20 , fontFamily:'interSemiBold' } as TextStyle,
  'interRegular8': { fontSize: 8, lineHeight: 12, fontFamily:'interRegular' } as TextStyle,
  'interRegular10': { fontSize: 10, lineHeight: 14, fontFamily:'interRegular' } as TextStyle,
  'interMedium10': { fontSize: 10, lineHeight: 14,fontFamily:'interMedium', } as TextStyle,
  'interMedium8': { fontSize: 8, lineHeight: 12, fontFamily:'interMedium', } as TextStyle,

};

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles['interMedium10'],
  { color: Colors.secondaryWhite },
];

const $presets = {
  default: $baseStyle,
};
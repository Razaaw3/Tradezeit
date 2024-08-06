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

export function Text(props: TextProps) {
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
    $styles.push({ color: Colors.textColor });
  }

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

const $sizeStyles = {
  8: { fontSize: 8, lineHeight: 12.79 } as TextStyle,
  10: { fontSize: 10, lineHeight: 12.79 } as TextStyle,
  12: { fontSize: 12, lineHeight: 13.79 } as TextStyle,
  13: { fontSize: 13, lineHeight: 19.13 } as TextStyle,
  14: { fontSize: 14, lineHeight: 16.09 } as TextStyle,
  18: { fontSize: 18, lineHeight: 22.26 } as TextStyle,
  16: { fontSize: 16, lineHeight: 19.5 } as TextStyle,
  20: { fontSize: 20, lineHeight: 24.87 } as TextStyle,
  22: { fontSize: 22, lineHeight: 27.35 } as TextStyle,
  24: { fontSize: 24, lineHeight: 29.84 } as TextStyle,
  26: { fontSize: 26, lineHeight: 32.32 } as TextStyle,
  28: { fontSize: 28, lineHeight: 34.81 } as TextStyle,
  30: { fontSize: 30, lineHeight: 37.29 } as TextStyle,
  50: { fontSize: 50, lineHeight: 47.29 } as TextStyle,
};

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles['16'],
  { color: Colors.textColor },
];

const $presets = {
  default: $baseStyle,
};
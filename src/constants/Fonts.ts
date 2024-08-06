import { ColorValue } from "react-native"
import { Colors } from "./Colors"


export const interMedium16 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interMedium',
    fontSize : 16,
    color : color,
    lineHeight : 19.36
})

export const interSemiBold32 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interSemiBold',
    fontSize : 32,
    color : color,
    lineHeight : 38.73
})

export const interSemiBold12 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interSemiBold',
    fontSize : 12,
    color : color,
    lineHeight : 16
})

export const interRegular16 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interRegular',
    fontSize : 16,
    color : color,
    lineHeight : 19.36
})

export const interMediumButton14 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interMedium',
    fontSize : 14,
    color : color,
    lineHeight : 24
})

export const interRegular14 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interRegular',
    fontSize : 14,
    color : color,
    lineHeight : 16.94
})

export const interRegular8 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interRegular',
    fontSize : 8,
    color : color,
    lineHeight : 12
})

export const interMedium10 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interMedium',
    fontSize : 10,
    color : color,
    lineHeight : 14
})

export const interMedium8 = (color: ColorValue = Colors.textColor)=> ({
    fontFamily:'interMedium',
    fontSize : 8,
    color : color,
    lineHeight : 12
})

export const interMedium14 = (color: ColorValue = Colors.textColor,lineHeight = 20)=> ({
    fontFamily:'interMedium',
    fontSize : 14,
    color : color,
    lineHeight : lineHeight
})
import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const StylesConstants = StyleSheet.create({
    mainContainer:{
        backgroundColor : Colors.background,
        flex : 1,
        paddingHorizontal:15
    },
    simpleContainer:{
        backgroundColor : Colors.background,
        flex : 1,
    },

    colALLCenter : {
        justifyContent:'center',
        alignItems:'center'
    },

    rowAllCenter:{
        flexDirection : 'row',
        justifyContent:'center',
        alignItems:'center'
    },

    rowJustifyBetween : {
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    rowJustifyEvenly : {
        flexDirection : 'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})
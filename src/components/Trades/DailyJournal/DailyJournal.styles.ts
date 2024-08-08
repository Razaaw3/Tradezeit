import { WIDTH } from "@/constants/StylesConstants";
import { StyleSheet } from "react-native";



const DailyJournalStyles = StyleSheet.create({
    table:{
        width: WIDTH,
    },
    tableHeader:{
        justifyContent:'space-between',
        width:WIDTH-50,
        alignItems:'center'
    },
    tableRow:{
        justifyContent:'space-between',
        width:WIDTH-30,
        alignItems:'center',
    }
    
});

export default DailyJournalStyles



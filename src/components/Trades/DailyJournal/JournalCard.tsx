import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DocumentIcon from "@/assets/Icons/DocumentIcon";
import { StylesConstants } from "@/constants/StylesConstants";
import { Colors } from "@/constants/Colors";
import {
  interMedium10,
  interSemiBold12,
} from "@/constants/Fonts";
import TradesInfo from "./TradesInfo";
import { Typo } from "@/utils/RNText";

type Props = {
  onPress: () => void;
};

const JournalCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={interSemiBold12(Colors.greenProfit)}>
          Net P&L ₹2,300.00
        </Text>
        <View style={styles.dateContainer}>
          <Text style={interMedium10(Colors.secondaryWhite)}>
            Fri, Mar 12, 2024
          </Text>
          <DocumentIcon />
        </View>
      </View>

      <View
        style={[StylesConstants.rowJustifyBetween, { columnGap: 10, flex: 1 }]}
      >
        <View>
          <Typo>Chart</Typo>
        </View>
        <View style={{ flex: 1 }}>
          <TradesInfo />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JournalCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 6,
    paddingTop: 12.5,
    paddingHorizontal: 12,
    borderTopWidth: 0.4,
    borderTopColor: Colors.disabledBlack,
  },
  headerRow: {
    ...StylesConstants.rowJustifyBetween,
    marginBottom: 9,
  },
  dateContainer: {
    ...StylesConstants.rowAllCenter,
    columnGap: 16.5,
  },
});

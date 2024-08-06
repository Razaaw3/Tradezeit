import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { StylesConstants } from "@/constants/StylesConstants";
import { Colors } from "@/constants/Colors";

type Props = {
    setSearchVisible : (param:boolean)=>void
};

const SearchBar = ({setSearchVisible}: Props) => {
  const [borderColor, setBorderColor] = useState(Colors.disabledWhite);

  return (
    <View style={[styles.container, { borderColor }]}>
      <TouchableOpacity style={styles.iconArea}>
        <Entypo name="chevron-left" size={24} color={Colors.disabledWhite} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search eg. Profit, Loss, Date"
        placeholderTextColor={Colors.disabledWhite}
        style={styles.input}
        onFocus={() => setBorderColor(Colors.primaryBlue)}
        onBlur={() => setBorderColor(Colors.disabledWhite)}
      />
      <TouchableOpacity onPress={()=>setSearchVisible(false)} style={styles.iconArea}>
        <Entypo name="cross" size={24} color={Colors.disabledWhite} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    ...StylesConstants.rowAllCenter,
    borderWidth: 0.4,
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 10
  },
  iconArea: {
    ...StylesConstants.colALLCenter,
    width: 24,
    height: 24,
    marginHorizontal: 8
  },
  input: {
    flex: 1
  }
});

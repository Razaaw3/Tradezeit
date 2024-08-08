import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { tradeTableHeading } from "@/utils/ConstantData";
import { Ionicons } from "@expo/vector-icons";
import { tradingData } from "@/constants/DummyData";
import { Typo } from "@/utils/RNText";
import { Colors } from "@/constants/Colors";
import TradeTableCell from "./TradeTableCell";
import { tradingDataType } from "@/utils/types";
import DailyJournalStyles from "./DailyJournal.styles";

type Props = {};

const TradeTable = (props: Props) => {
  const [page, setPage] = useState(0);
  const [tasksPerPage] = useState(10);
  const [tasksToShow, setTasksToShow] = useState<tradingDataType[]>([]);
  const from = page * tasksPerPage;
  const to = Math.min((page + 1) * tasksPerPage, tradingData.length);

  const [checkedTasks, setCheckedTasks] = useState([]);
  const [active, setActive] = useState(0);

  //   const toggleCheckbox = (taskId) => {
  //     if (checkedTasks.includes(taskId)) {
  //       setCheckedTasks(checkedTasks.filter((id) => id !== taskId));
  //     } else {
  //       setCheckedTasks([...checkedTasks, taskId]);
  //     }
  //   };

  useEffect(() => {
    const start = page * tasksPerPage;
    const end = start + tasksPerPage;
    setTasksToShow(tradingData.slice(start, end));
  }, [page]);

  return (
    <View style={{ margin: 20, flex: 1 }}>
      <ScrollView horizontal>
        <DataTable style={DailyJournalStyles.table}>
          <DataTable.Header style={DailyJournalStyles.tableHeader}>
            {tradeTableHeading.map((item, index) => (
              <Typo size="interMedium10">{item}</Typo>
            ))}
          </DataTable.Header>

          <FlatList
            data={tasksToShow}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => <TradeTableCell item={item} />}
          />
        </DataTable>
      </ScrollView>
      <View style={{ marginHorizontal: 20 }}>
        <Text>
          Showing {from + 1} to {to} out of {tradingData.length} Clients
        </Text>
      </View>
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(tradingData.length / tasksPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${page + 1} of ${Math.ceil(tradingData.length / tasksPerPage)}`}
        showFastPaginationControls
      />
    </View>
  );
};

export default TradeTable;



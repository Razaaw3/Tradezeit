import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DailyJournal from './dailyJournal';
import TradeLog from './TradeLog';
import { Colors } from '@/constants/Colors';
import { interSemiBold14 } from '@/constants/Fonts';


const Tab = createMaterialTopTabNavigator();

export default function TradeTopTab() {
  return (
    <Tab.Navigator
      initialRouteName="trades"
      screenOptions={{
        tabBarInactiveTintColor : Colors.disabledBlue,
        tabBarActiveTintColor: Colors.primaryBlue,
        tabBarLabelStyle: { fontFamily :  'interSemiBold', fontSize : 14, lineHeight:20 },
        tabBarStyle: { backgroundColor: Colors.supportingBackground,borderWidth:0 },
        
      }}
    >
      <Tab.Screen
        name="Daily Journal"
        component={DailyJournal}
      />
      <Tab.Screen
        name="Trade Log"
        component={TradeLog}
      />
    </Tab.Navigator>
  );
}
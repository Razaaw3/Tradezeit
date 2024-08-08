import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import DashboardIcon from '@/assets/Icons/BottomTabs/DashboardIcon';
import { Colors } from '@/constants/Colors';
import TradesIcon from '@/assets/Icons/BottomTabs/TradesIcon';
import ReportIcon from '@/assets/Icons/BottomTabs/ReportIcon';
import PeopleIcon from '@/assets/Icons/BottomTabs/PeopleIcon';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryBlue,
        tabBarInactiveTintColor: Colors.disabledWhite,
        headerStyle:{backgroundColor:Colors.supportingBackground,borderColor:'red',borderBottomWidth:0},
        headerShadowVisible:false

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => {
            return(
            <DashboardIcon color={color} />
          )},
        }}
      />
      <Tabs.Screen
        name="(trades)"
        options={{
          title: 'Trades',
          headerTitleStyle:{color:Colors.secondaryWhite},
          tabBarIcon: ({ color  }) => (
            <TradesIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addTrade"
        options={{
          title: 'Add Trade',
          tabBarIcon: ({ color, }) => (
            <TabBarIcon name={'add'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => (
            <ReportIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile ',
          tabBarIcon: ({ color }) => (
              <PeopleIcon color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

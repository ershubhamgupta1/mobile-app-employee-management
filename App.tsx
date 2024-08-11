import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/components/DrawerContent';

import NotifcationScreen from './src/screens/Notifcation';
import EmployeeDetailScreen from './src/screens/EmployeeDetailScreen';
import DashboardScreen from './src/screens/Dashboard';

import {RootStackParamList} from './types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// Uncomment this code for left side drawer
// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName='Dashboard' screenOptions={{drawerPosition: 'left'}} drawerContent={(props) => <DrawerContent {...props} />}>
//         <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//         <Drawer.Screen name="CreateEmployee" component={CreateEmployeeScreen} />
//         <Drawer.Screen name="UpdateEmployee" component={CreateEmployeeScreen} />
//         <Drawer.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

const handleScreenOptions=({ route }) =>{
  return {
    tabBarIcon: ({ color, size }) => {
      let iconName;
      let iconColor= '';
  
      if (route.name === 'Dashboard') {
        iconName = 'columns'; // Icon for Dashboard
        iconColor = '#ff6600';
      } else if (route.name === 'Notification') {
        iconName = 'bell'; // Icon for Create
        iconColor = 'grey';
      } else if (route.name === 'Profile') {
        iconColor = '#6395ee'
        iconName = 'user'; // Icon for Profile
      }
  
      // Return the icon component
      return <FontAwesome name={iconName} size={size} color={iconColor} />;
    },
    // tabBarStyle : {
    //   backgroundColor : 'green'
    // },
    tabBarLabelStyle : {
      // backgroundColor : 'green'
      color: 'grey'
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={handleScreenOptions}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} 
          options={{
            // tabBarIcon : ()=>{},
            tabBarLabelStyle: { color: '#ff6600', fontWeight: 'bold' }, // Color for the Settings label
          }}
        />
        <Tab.Screen name="Notification" component={NotifcationScreen} 
          options={{
            tabBarLabelStyle: { color: 'darkgrey', fontWeight: 'bold' }, // Color for the Settings label
          }}
        />
        <Tab.Screen name="Profile" component={EmployeeDetailScreen}
          options={{
            tabBarLabelStyle: { color: '#6395ee', fontWeight: 'bold' }, // Color for the Settings label
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

export default App;
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@ui-kitten/components'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout } from '@ui-kitten/components';
import Appointments from './Appointments';
import Notifications from './Notifications';
import Profile from './Profile';

const { Navigator, Screen } = createBottomTabNavigator();
// const [selectedIndex, setSelectedIndex] = React.useState(0);


const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='bell-outline'/>
);

const EmailIcon = (props) => (
  <Icon {...props} name='email-outline'/>
);

const BottomTabBar = ({ navigation, state }) => (

  <React.Fragment>
    <BottomNavigation

      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='APPOINTMENTS ' icon={EmailIcon}/>
      <BottomNavigationTab title='NOTIFICATIONS' icon={BellIcon}/>
      <BottomNavigationTab title='PROFILE' icon={PersonIcon}/>
    </BottomNavigation>
  </React.Fragment>
  
);

const HomeScreen = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Appointments' component={Appointments}/>
    <Screen name='Profile' component={Profile}/>
    <Screen name='Notifications' component={Notifications}/>
  </Navigator>
);

export default HomeScreen;
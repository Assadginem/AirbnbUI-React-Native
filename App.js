import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Profile from './screens/Profile'


export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavScreens = createBottomTabNavigator({
  Explore: 
    {screen: Explore,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({tintColor})=> (
          <Icon name="ios-search" color={tintColor} size={24}/>
        )
      }
    },
  Saved: 
    {screen: Saved,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({tintColor})=> (
          <Icon name="ios-heart" color={tintColor} size={24}/>
        )
      }},
  Trips: 
    {screen: Trips,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({tintColor})=> (
          <Icon name="ios-car" color={tintColor} size={24}/>
        )
      }}, 
  Profile: 
    {screen: Profile,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({tintColor})=> (
          <Icon name="ios-person" color={tintColor} size={24}/>
        )
      }
    }
},{
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
});

const AppContainer = createAppContainer(TabNavScreens);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
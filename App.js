import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';

import AuthScreen from './screens/AuthScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import SideDrawer from './screens/SideDrawer';
export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen:HomeScreen},
  ExchangeScreen: {screen:ExchangeScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      //console.log(routeName)
      if(routeName === "HomeScreen"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "ExchangeScreen"){
        return(
          <Image
          source={require('./assets/exchange.png')}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);

const AppDrawerNavigator=createDrawerNavigator({SideDrawer:{screen:TabNavigator},},{contentComponent:SideDrawer},{initialRouteName:'SideDrawer'})

const switchNavigator=createSwitchNavigator({LoginScreen:{screen:AuthScreen},Drawer:{screen:AppDrawerNavigator}})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

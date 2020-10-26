import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import About from '../screens/about';
import Component from '../screens/components';
import DComponent from '../screens/detail_components';
import Application from '../screens/application';
import DApplication from '../screens/detail_application';
import Connect from '../screens/connect';

const HomeStack = createStackNavigator();

export default function MyStack(){
    return(
      <NavigationContainer>  
        <HomeStack.Navigator>
        <HomeStack.Screen title="React Native Tutor" name="Home" component={Home} options={{headerTitle:"React Native Tutor"}}  />
        <HomeStack.Screen name="About" component={About} options={{headerTitle:"About React Native"}} />
        <HomeStack.Screen name="Component" component={Component} options={{headerTitle:"Learn React Native"}}/>
        <HomeStack.Screen name="DComponent" component={DComponent} options={{headerTitle:"Tutorial"}}/>
        <HomeStack.Screen name="Application" component={Application} options={{headerTitle:"React Jobs"}}/>
        <HomeStack.Screen name="DApplication" component={DApplication} options={{headerTitle:"React Native Tutor"}} />
        <HomeStack.Screen name="Connect" component={Connect} options={{headerTitle:"Deploy App"}} />
        </HomeStack.Navigator>
      </NavigationContainer>
    );
}
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
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="About" component={About} />
        <HomeStack.Screen name="Component" component={Component} />
        <HomeStack.Screen name="DComponent" component={DComponent} />
        <HomeStack.Screen name="Application" component={Application} />
        <HomeStack.Screen name="DApplication" component={DApplication} />
        <HomeStack.Screen name="Connect" component={Connect} />
        </HomeStack.Navigator>
      </NavigationContainer>
    );
}
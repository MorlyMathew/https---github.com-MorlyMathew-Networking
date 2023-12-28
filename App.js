import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cart from './src/Tab/Cart';
import CategoryOne from './src/Tab/CategoryOne';
import CategoryTwo from './src/Tab/CategoryTwo';
import Search from './src/Tab/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator()

 function MyTab(){
    return(
        <Tab.Navigator
        
        screenOptions={{
            tabBarLabelStyle : {fontSize :10},
            tabBarItemStyle : {width : 100},
            tabBarStyle : { backgroundColor : 'white'}

        }}>
            <Tab.Screen
                name='Cart'
                component={Cart}
                
                options={{tabBarActiveTintColor : 'blue',
                           tabBarInactiveTintColor : 'gray'}}/>
            <Tab.Screen
                name='Axios Api'
                component={CategoryOne}
                options={{tabBarActiveTintColor : 'blue',
                           tabBarInactiveTintColor : 'gray'}}/>
            <Tab.Screen
                name='Fetch Api'
                component={CategoryTwo}
                options={{tabBarActiveTintColor : 'blue',
                tabBarInactiveTintColor : 'gray'}}/>
                
          <Tab.Screen
                name='Search'
                component={Search}
                options={{tabBarActiveTintColor : 'blue',
                tabBarInactiveTintColor : 'gray'}}/>
        </Tab.Navigator>
    )
 }
export default function App(){
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    )
}
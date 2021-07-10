import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { headerTypes } from './redux/Reducers/index';
import Home from './pages/home/Home';
const Stack = createStackNavigator();
const Main = () => {
    const header = useSelector<headerTypes, headerTypes['header']>(
        (state) => state.header
    );
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={header === false ? 'none' : 'screen'} >
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

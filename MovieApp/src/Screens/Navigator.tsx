import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

const Stack = createStackNavigator()
const CheckLogin = () => {
    return (
        <Stack.Screen name="CheckLogin" component={CheckLogin}></Stack.Screen>
    )
}

const LoginNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
    )
}
const MovieNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="MovieHome">
            <Stack.Screen name="MovieHome" component={MovieHome}></Stack.Screen>
            <Stack.Screen name="MovieDetail" component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}


const AppNavigator = ()=>{
return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CheckLogin">
                <CheckLogin />
                <LoginNavigator />
                <MovieNavigator />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';

// 어디어디로 갈 수 있는지 명시를 해줘야함. 편의상 nested navigator에 적용해야하지만 한번에 루트로 만들었음.
type RootStackParamList = {
    Login: undefined;
    MovieHome: {
        logout:()=>void
    };
    MovieDetail: {
        id:number
    };
};

const Stack = createStackNavigator<RootStackParamList>();


const LoginNavigator = () => {
    const navigationOptions = {
        title: 'MOVIEAPP',
        headerTransparent: true,
        headerTintColor: '#E70915',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    return (
        <>
        <Stack.Screen name="Login" component={Login} options={navigationOptions}></Stack.Screen>
        </>
    )
}

const MovieNavigator = () => {
    return (
        <>
        <Stack.Screen name="MovieHome" component={MovieHome} ></Stack.Screen>
        <Stack.Screen name="MovieDetail" component={MovieDetail} options={{
            title: 'MOVIEAPP',
            headerTintColor: '#E70915',
            headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
            },
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }} />
        </>
    )
}


const Navigator = ()=>{
    const [isSignedIn, setIsSignedIn] = useState<string|null>('');
    AsyncStorage.getItem('key')
        .then(value=>{
            setIsSignedIn(value)
        })
        .catch(err=>{
            console.log(err)
        })
    
    if(isSignedIn){
        console.log("네비게이터왔어.", isSignedIn)
        return <CheckLogin />
    }else{
        return(
            <NavigationContainer>
                <Stack.Navigator>
                {isSignedIn ?  
                    MovieNavigator : LoginNavigator
                }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
};


export default Navigator;
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StackScreenProps } from '@react-navigation/stack'
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native'

const Container = Styled.View`
    flex:1;
    background-color:#141414;
    justify-content:center;
    align-items:center;
`
type Props = StackScreenProps<{},'CheckLogin'>;

const CheckLogin = ({route, navigation}:Props)=>{
    AsyncStorage.getItem('key')
        .then(value=>{
            if(value){
                navigation.navigate('MovieNavigator')
            }else{
                navigation.navigate('LoginNavigator')
            }
        })
        .catch((error:Error)=>{
            console.log(error)
        })

    return(
        <Container>
            <ActivityIndicator  size='large' color='#E70915'/>
        </Container>
    )
};

CheckLogin.navigationOptions ={
    header:null
}

export default CheckLogin;

import React, {useEffect, useState} from 'react';
import {FlatList, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #EEE;
`;

const WeatherContainer = Styled(FlatList)``;

const LoadingView = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Loading = Styled.ActivityIndicator`
    margin-bottom: 16px;
`;
const LoadingLabel = Styled.Text`
    font-size: 16px;
`;

const WeatherItemContainer = Styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Weather = Styled.Text`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
`;

const Temperature = Styled.Text`
    font-size: 16px;
`;

interface Props {}
const API_KEY='Z%2FE73cetQA9YNkF1BxzPihfthUp8eYMd2HJI4o3QDqOlZLBahilKWdHfR6hwYg2mmHFPkMvAr16UNlyWdbp7sA%3D%3D';
interface IWeather {
    temperature?:number;
    weather?:string;
    isLoading:boolean;
}

const WeatherView = ({}:Props)=>{
    const [weatherInfo, setWeatherInfo] = useState<IWeather>({
        temperature:undefined,
        weather:undefined,
        isLoading:false
    });

    const getCurrentWeather = ()=>{
        setWeatherInfo({
            isLoading:false,
        });
        Geolocation.getCurrentPosition(position=>{
            // Geolocation을 활용해서 가져올 수 있음.
            const {latitude, longitude} = position.coords;
            // axios가 좋긴 한데 이게 업데이트를 못 쫓아오는 경우가 있다고 함. response timeout이 없네...
            fetch(
                `http://apis.data.go.kr/1360000/VilageFcstInfoService?serviceKey=${API_KEY}&nx=${latitude}&ny=${longitude}&dataType=JSON&pageNo=1&numOfRows=10&base_date=${dt}&base_time=${hh}`
            )
            .then(res =>res.json())
            .then(json=>{
                setWeatherInfo({
                    temperature:json.main.temp,
                    weather:json.weather[0].main,
                    isLoading:true
                })
            })
            .catch(error=>{
                setWeatherInfo({
                    isLoading:true
                });
                showError('날씨 정보를 가져오는데 실패했습니다.')
            })
        }, error=>{
            setWeatherInfo({
                isLoading:true
            });
            showError('위치 정보를 가져오는데 실패했습니다.')
        })
    };
    const showError = (message:string): void =>{
        setTimeout(()=>{
            Alert.alert(message);
        },500)
    };
    
    useEffect(()=>{
        getCurrentWeather();
    },[])

    let data=[];
    const {isLoading, weather, temperature} = weatherInfo;
    if(weather&&temperature){
        data.push(weatherInfo);
    }

    return(
        <Container>
            <WeatherContainer onRefresh={()=>getCurrentWeather()}
                refreshing={!isLoading}
                data={data}
                keyExtractor={(item, index)=>{
                    return `Weather-${index}`
                }}
                ListEmptyComponent={
                    <LoadingView>
                        <Loading size='large' color='#1976D2' />
                        <LoadingLabel>Loading...</LoadingLabel>
                    </LoadingView>
                }
                renderItem={({item,index})=>(
                    <WeatherItemContainer>
                        <Weather>{(item as IWeather).weather}</Weather>
                        <Temperature>{(item as IWeather).temperature}℃</Temperature>
                    </WeatherItemContainer>
                )}
                contentContainerStyle={{flex:1}}
            />
        </Container>
    )
}

export default WeatherView;

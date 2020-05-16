import React, { useEffect, useLayoutEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, NavigationContainer } from '@react-navigation/native';

import Styled from 'styled-components/native';

import BigCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;

const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
`;

type RootStackParamList = {
  Login: undefined;
  MovieHome: {
    logout:()=>void
  };
  MovieDetail: {
      id:number
  };
};

type Props = StackScreenProps<RootStackParamList,'MovieHome'>
type INaviProps = StackScreenProps<RootStackParamList, 'MovieHome'>

const MovieHome = ({ route, navigation }:Props) => {
  const _logout = () => {
    AsyncStorage.removeItem('key');
    navigation.navigate('Login');
  };

  useEffect(() => {
    console.log(route.params)
    navigation.setParams({
      logout: _logout,
    });
    console.log(route.params)
    const logout = route.params.logout
    navigation.setOptions(()=>{
      return {
        title: 'MOVIEAPP',
        headerTintColor: '#E70915',
        headerStyle: {
          backgroundColor: '#141414',
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: null,
        headerRight: (
          <StyleButton
            onPress={() => {
              if (logout && typeof logout === 'function') {
                logout();
              }
            }}>
            <Icon source={require('~/Assets/Images/ic_logout.png')} />
          </StyleButton>
      ),
    }
  })
  }, []);

  return (
    <Container>
      <BigCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="최신 등록순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="평점순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="다운로드순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
    </Container> 
  );
};

export default MovieHome;

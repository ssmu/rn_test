import React from 'react';
import { ActivityIndicator } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: #141414;
  justify-content: center;
  align-items: center;
`;

const CheckLogin = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#E70915" />
    </Container>
  );
};

export default CheckLogin;

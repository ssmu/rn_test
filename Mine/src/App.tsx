/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React,{Fragment} from 'react';
import Styled from 'styled-components/native';
import {MineFinderContextProvider} from '~/Context/MineFinderContext';
import MineFinder from '~/Screens/MineFinder';

const Container = Styled.View`
  flex:1;
  background-color:#EEE;
`;

const App = () => {
  return (
    <MineFinderContextProvider>
      <Container>
        <MineFinder />
      </Container>
    </MineFinderContextProvider>
  );
};

export default App;

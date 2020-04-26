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

const Container = Styled.SafeAreaView`
  flex:1;
`;
interface Props {}

const App = ({}:Props) => {
  return (
    <MineFinderContextProvider>
      <Container>
        <MineFinder />
      </Container>
    </MineFinderContextProvider>
  );
};

export default App;

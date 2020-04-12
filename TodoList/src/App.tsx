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
import {TodoListContextProvider} from '~/Context/TodoListContext';
import Todo from './Screens/Todo';

const Container = Styled.View`
  flex:1;
  background-color:#EEE;
`;

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
    
  );
};

export default App;

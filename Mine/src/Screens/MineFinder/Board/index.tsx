import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {MineFinderContext} from '~/Context/MineFinderContext';

const Container = Styled.View`
    height:40px;
    justify-content:center;
    align-items:center;
`;

const TitleLabel=Styled.Text`
    font-size:24px;
    font-weight:bold;
`;

interface Props {}

const Board = ({}:Props)=>{
    const {board, clickButton} = useContext<IMineFinderContext>(
        MineFinderContext
    );
    
    return(
        <Container>
            <TitleLabel>Todo List App</TitleLabel>
        </Container>
    );
};



export default Board;
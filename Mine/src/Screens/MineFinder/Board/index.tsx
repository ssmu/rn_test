import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import Button from './Button';

import {MineFinderContext} from '~/Context/MineFinderContext';

const Container = Styled.View`
    flex:1;
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
            <Container>
            {
                board.map((x,key)=>(
                <Button key={key} clicked={x} idx={key} 
                    onPress={clickButton}/>))
            }
            </Container>
        </Container>
    );
};



export default Board;
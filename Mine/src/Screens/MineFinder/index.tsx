import React from 'react';
import Styled from 'styled-components/native';
// import Board from './Board';
import Header from './Header';


const Container = Styled.View`
    flex:1;
`;

interface Props {}

const MineFinder = ({}:Props)=>{
    return(
        <Container>
            <Header />
            {/* <Board /> */}
        </Container>
    )
}

export default MineFinder
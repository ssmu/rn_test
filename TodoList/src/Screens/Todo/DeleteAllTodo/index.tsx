import React from 'react';
import Styled from 'styled-components/native';
import DeleteBtn from './DeleteBtn';

const Container = Styled.SafeAreaView`
    position : absolute;
    bottom : 0;
    align-self : center;
    justify-content : flex-end;
`;

interface Props {
    onPress?:()=>void
}

const DeleteAllTodo = ({}:Props)=>{
    return(
        <>
        <DeleteBtn />
        </>    
    );
};

export default DeleteAllTodo;
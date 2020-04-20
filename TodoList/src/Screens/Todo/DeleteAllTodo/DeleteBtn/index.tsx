import React,{useContext} from 'react';
import Styled from 'styled-components/native';
import {TodoListContext} from '~/Context/TodoListContext';

const Container = Styled.SafeAreaView`
`;
const ButtonContainer = Styled.TouchableOpacity`
    box-shadow:4px 4px 8px #999;
`;
const Icon = Styled.Image``;

interface Props {}

const DeleteAllButton = ({}:Props)=>{
    const {deleteAllTodoList} = useContext<ITodoListContext>(TodoListContext);

    return(
        <Container>
            <ButtonContainer onPress={deleteAllTodoList}>
                <Icon source={require('~/Assets/Images/remove.png')} />
            </ButtonContainer>
        </Container>    
    );
};

export default DeleteAllButton;
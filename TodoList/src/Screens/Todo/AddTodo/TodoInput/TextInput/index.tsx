import React, {useContext, useState} from 'react';
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

const Input = Styled.TextInput`
    width : 100%;
    height : 40px;
    background-color : #FFF;
`;

interface Props {
    hideTodoInput : ()=>void;
}

const TextInput = ({hideTodoInput}:Props) => {
    const {addTodoList} = useContext<ITodoListContext>(TodoListContext);
    const [value, setvalue]=useState<string>("")
    return(
        <Input 
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="할 일을 입력한다"
            returnKeyType="done"
            onSubmitEditing={({nativeEvent})=>{
                addTodoList(nativeEvent.text);
                hideTodoInput();
            }}
            onChangeText={text=>setvalue(text)}
            value={value}
        />
    );
};

export default TextInput;
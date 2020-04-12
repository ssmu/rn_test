import React,{useState} from 'react';
import AddButton from './AddButton';
import TodoInput from './TodoInput';
import TodoItem from '../TodoListView/TodoList/TodoItem';


interface Props {}

const AddTodo = ({}:Props)=>{
    const [showInput, setShowInput] = useState<boolean>(false);
    
    return(
        <>
        <AddButton onPress={()=>setShowInput(true)} />
        {showInput &&
            <TodoInput hideTodoInput={()=>setShowInput(false)} />
        }
        </>
    );
};

export default AddTodo;
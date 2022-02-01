import React,{useState} from 'react';
import './Todolist.css';
import Form from '../form/Form';
import Todo from '../todo/Todo';
const Todolist = () => {
    const[todos,setTodos] = useState([]);
    const addTodo = todo => {
        if(!todo.title|| /^\s*$/.test(todo.title)){
            return;
        }
        const newTodos = [...todos,todo];
        setTodos(newTodos);
        console.log(todo,...todos);
    };
    const removeTodo = id => {
        const filteredTodo = [...todos].filter(todo => todo.id !== id);
        setTodos(filteredTodo);
    }
    const editTodo = (todoId,newValue) => {
        if(!newValue.title || /^\s*$/.test(newValue.title)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId? newValue : item)))
    };

    return (
        <div className='box'>
            <h1 className='whatsup'>Whats the Plan for TodaY?</h1>
            <div className='ndpagecont'>
                <Form onSubmit={addTodo}/>
                <Todo 
                todos={todos}
                removeTodo={removeTodo}
                editTodo={editTodo}
                />
            </div>
        </div>
    );
};

export default Todolist;

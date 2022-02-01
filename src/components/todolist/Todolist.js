import React,{useState} from 'react';
import './Todolist.css';
import Form from '../form/Form';
import {Button} from 'antd';
import Todo from '../todo/Todo';
import DisplayTodos from '../display/DisplayTodos';
const Todolist = () => {
    const[todos,setTodos] = useState([]);
    const[showForm,setShowForm] = useState(false);
    const click = () => setShowForm(true);
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
            <div className='ndpagecont'>
                <Button style={{borderRadius: '20px',margin: '10px',width: '100px'}} 
                onClick={() => setShowForm(!showForm)} >
                    {!showForm ? 'Add Task' : 'Close Form'}                  
                </Button>
                {showForm ? <Form onSubmit={addTodo}/> : null}
                
                {/* <div class="todoscont">
                    <Todo 
                    todos={todos}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    />
                </div> */}
                <DisplayTodos 
                removeTodo={removeTodo}
                editTodo={editTodo}
                todos={todos}
                />
                
            </div>
        </div>
    );
};

export default Todolist;

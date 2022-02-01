import React,{useState} from 'react';
import './Todo.css'
import Form from '../form/Form';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
const Todo = ({todos,removeTodo,editTodo}) => {
    const [edit,setEdit] = useState({
        id: null,
        title: '',
        description: '',
        timestamp: new Date(),
        dueDate: ''
    });
    const submitUpdate = value => {
        editTodo(edit.id,value);
        setEdit({
            id: null,
            title: '',
            description: '',
            timestamp: new Date(),
            dueDate: ''
        });
    };
    if(edit.id){
        return <Form edit={edit} onSubmit={submitUpdate}/>
    }
  return todos.map((todo,index) => (
      <div className='todoContainer' key={index}>
          <div className='top'>
                <div key={todo.id} className='todoTitle'>
                    {todo.title}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                    />
                    <TiEdit 
                    className='edit-icon'
                    onClick={() => setEdit({id: todo.id,
                        title: todo.title,
                        description: todo.description,
                        timestamp: todo.timestamp,
                        dueDate: todo.dueDate})}
                    />
                </div>
          </div>
          <div className='bottom'>
                <div className='todoDesc' key={todo.id}>
                    {todo.description}
                </div>
                <div className='duedate' key={todo.id}>
                    {todo.dueDate}
                </div>
          </div>
          
          
          
          


      </div>
  ));
};

export default Todo;

import React,{ useState } from 'react';

import './Form.css';
const Form = (props) => {
    const [title, setTitle] = useState(props.edit? props.edit.title: '');
    const [desc,setDesc] = useState(props.edit? props.edit.description: '');
    const [date,setDate] = useState(props.edit? props.edit.dueDate: '');
    const [status,setStatus] = useState(props.edit? props.edit.status: '');
    const [tag,setTag] = useState(props.edit?props.edit.tag:'');
    const handleChange = e => {
        setTitle(e.target.value);
    };
    const deschandleChange = e => {
        setDesc(e.target.value);
    }
    const datehandleChange = e => {
        setDate(e.target.value);
    };
    const statushandleChange = e => {
        setStatus(e.target.value);
    }
    const taghandleChange = e => {
        setTag(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            timestamp: new Date().toISOString(),
            description: desc,
            dueDate: date,
            status: status,
            tag: tag
        });
            setTitle('');
            setDesc('');
            setDate('');
            setStatus('')
            setTag('');
    };
    return (
        <>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                    <input
                    placeholder='Update title'
                    value={title}
                    onChange={handleChange}
                    name='text'
                    size={100}
                    required
                    className='todo-title'
                    />
                    <textarea 
                    placeholder='Update Description'
                    value = {desc}
                    onChange={deschandleChange}
                    name='desc'
                    required
                    className='todo-desc'
                    />
                    <input 
                    type="date"
                    placeholder='update date'
                    value={date}
                    name='date'
                    onChange={datehandleChange}
                    className='todo-date'
                    />
                    <select 
                    name='status' 
                    className='statusSelect'
                    value={status}
                    onChange={statushandleChange}
                    >
                        <option value='open'>Open</option>
                        <option value='working'>Working</option>
                        <option value='done'>Done</option>
                        <option value='overdue'>Overdue</option>
                    </select>
                    <input 
                    className='todo-tag'
                    value={tag}
                    type="number"
                    onChange={taghandleChange}
                    placeholder='no of tags'
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Update
                    </button>
                    </>
                ): (
                    <>
                    <input
                    placeholder='Add a title'
                    value={title}
                    size={100}
                    required
                    onChange={handleChange}
                    name='text'
                    className='todo-title'
                    />
                    <textarea 
                    placeholder='Description'
                    value = {desc}
                    size={1000}
                    required
                    onChange={deschandleChange}
                    name='desc'
                    className='todo-desc'
                    />
                    <input 
                    type="date"
                    placeholder='add date'
                    value={date}
                    name='date'
                    onChange={datehandleChange}
                    className='todo-date'
                    />
                    <select 
                    name='status' 
                    className='statusSelect'
                    value={status}
                    onChange={statushandleChange}
                    >
                        <option value='open'>Open</option>
                        <option value='working'>Working</option>
                        <option value='done'>Done</option>
                        <option value='overdue'>Overdue</option>
                    </select>
                    <input 
                    className='todo-tag'
                    value={tag}
                    type={Number}
                    onChange={taghandleChange}
                    placeholder='no of tags'
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Add todo
                    </button>
                    </>
                )}
                
            </form>
        </>
    );
};

export default Form;

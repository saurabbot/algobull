import React,{useState} from 'react';
// import { Popconfirm, Space, Menu, Dropdown } from 'antd';
import {Button} from 'antd';
import ProTable from '@ant-design/pro-table';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Form from '../form/Form';
const DisplayTodos = ({todos,removeTodo,editTodo}) => {
    // const { Search } = Input;
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
    const data = todos;
    const columns = [
        {
            dataIndex: 'id',
            title: 'ID',
            valueType: 'number',
            width: 70,
            sorter: (a,b) => a.id - b.id,
            sortDirections: ["descend", "ascend"],
        },
        {
            dataIndex: 'title',
            title: 'Title',
            width: 150,
            sorter: (a,b) => a.title.length - b.title.length,
            sortDirections: ["descend", "ascend"],
            filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => {
                return (
                    <>
                        <Input 
                        autoFocus 
                        placeholder='Search task'
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                        }}
                        onPressEnter={() => {
                            confirm();
                        }}
                        onBlur={() => {
                            confirm();
                        }}

                        />
                        <Button 
                        type='danger' 
                        style={{width: '40px',padding: '2px',height: '20px',fontSize: '10px'}}
                        onClick={() => {
                            clearFilters()
                        }}
                        > 
                            Reset
                        </Button>
                    </>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.name.toLowerCase().includes(value.toLowerCase());
            },
        },
        {
            dataIndex: 'description',
            title: 'Description',
            width: 250,
            sorter: (a,b) => a.title.length - b.title.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            dataIndex: 'status',
            title: 'Status',
            width: 150,
            render: (text, row) => (
                <Button danger style={{width: '70px',height: '30px',padding: '3px'}}>
                    {row.status}
                </Button>
               ),
            filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => {
                return (
                    <>
                    <Input 
                    autoFocus
                    placeholder='search status'
                    value={selectedKeys[0]}
                    onChange={(e) => {
                        setSelectedKeys(e.target.value ?  [e.target.value]: []);
                    }}
                    onPressEnter={() => {
                        confirm();
                    }}
                    onBlur={() => {
                        confirm();
                    }}
                    />
                    <Button 
                    type='danger' 
                    style={{width: '40px',padding: '2px',height: '20px',fontSize: '10px'}}
                    onClick={() => {
                        clearFilters()
                    }}
                    > 
                        Reset
                    </Button>
                    </>
                    
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value,record) => {
                return record.status.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            dataIndex: 'dueDate',
            title: 'Due Date',
            width: 150,
            sorter: (a,b) => a.dueDate.length-b.dueDate.length,
            sortDirections: ["descend", "ascend"],
            filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => {
                return (
                    <>
                        <Input 
                        autoFocus
                        placeholder='Search in YYYY/MM/DD'
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value]: []);
                        }}
                        onPressEnter={() => {
                            confirm();
                        }}
                        onBlur={() => {
                            confirm();
                        }}
                        />
                        <Button 
                        type='danger'
                        style={{width: '40px',padding: '2px',height: '20px',fontSize: '10px'}}
                        onClick={() => {
                            clearFilters()
                        }}
                        >
                            Reset filters
                        </Button>
                    </>
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value, record) => {
                return record.dueDate.toLowerCase().includes(value.toLowerCase());
            },

        },
        {
            dataIndex: 'tag',
            title: 'Tags',
            width: 80,
            filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => {
                return (
                    <>
                    <Input 
                    autoFocus
                    placeholder='search tag'
                    value={selectedKeys[0]}
                    onChange={(e) => {
                        setSelectedKeys(e.target.value ?  [e.target.value]: []);
                    }}
                    onPressEnter={() => {
                        confirm();
                    }}
                    onBlur={() => {
                        confirm();
                    }}
                    />
                    <Button 
                    type='danger' 
                    style={{width: '40px',padding: '2px',height: '20px',fontSize: '10px'}}
                    onClick={() => {
                        clearFilters()
                    }}
                    > 
                        Reset
                    </Button>
                    </>
                    
                )
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter: (value,record) => {
                return record.tag.toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            dataIndex: 'timestamp',
            title: 'Created At',
            width: 250,
            sorter: (a,b) => a.title.length - b.title.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            dataIndex: 'key',
            key: 'key',
            title: 'Delete Task',
            width: 20,
            render: (text, row) => (
                <Button danger style={{width: '70px',height: '30px'}} onClick={()=> removeTodo(row.id)}>
                  {"Delete"}
                </Button>
               ),
        },
        {
            dataIndex: 'key',
            key: 'key',
            title: 'Edit Task',
            width: 20,
            render: (text, row) => (
                <Button style={{width: '70px',height: '30px'}} onClick={()=> setEdit({id: row.id,
                    title: row.title,
                    description: row.description,
                    timestamp: row.timestamp,
                    dueDate: row.dueDate})}>
                  {"Edit"}
                </Button>
               ),
        },
    ];
    if(edit.id){
        return <Form edit={edit} onSubmit={submitUpdate}/>
    }
    return (
        <>
            <div className='search' style={{width: '400px',display: 'flex',flexDirection: 'row',margin: '10px'}}>
                <Input 
                autoFocus 
                style={{borderRadius: '30px'}}
                placeholder='search anything'
                />
                <Button style={{borderRadius: '30px',margin: '5px'}}>Search</Button>
            </div>
            <ProTable 
            dataSource={data}
            columns={columns}
            pagination={{
                showQuickJumper: true,
            }}
            style={{
                width: '100%',
            }}

            />
        </>
        
    )
};
export default DisplayTodos;

import { Popconfirm, Space, Menu, Dropdown } from 'antd';
import React from 'react';
import {Button} from 'antd';
import ProTable from '@ant-design/pro-table';
import { DownOutlined } from '@ant-design/icons';

const DisplayTodos = ({todos,removeTodo,editTodo}) => {
    const data = todos;
    const columns = [
        {
            dataIndex: 'id',
            title: 'ID',
            valueType: 'number',
            width: 70,
        },
        {
            dataIndex: 'title',
            title: 'Title',
            width: 150,
        },
        {
            dataIndex: 'description',
            title: 'Description',
            width: 180,
        },
        {
            dataIndex: 'dueDate',
            title: 'Due Date',
            width: 200,
        },
        {
            dataIndex: 'timestamp',
            title: 'Created At',
            width: 250,
        },
        {
            dataIndex: 'key',
            key: 'key',
            title: 'Add Task',
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
            render: (text, record) => (
                <Button style={{width: '70px',height: '30px'}} onClick={()=> console.log(record)}>
                  {"Edit"}
                </Button>
               ),
        },
    ];
    return (
        <ProTable 
        dataSource={data}
        columns={columns}
        pagination={{
            showQuickJumper: true,
        }}
        />
    )
};
export default DisplayTodos;

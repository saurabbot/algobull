import { Popconfirm, Space, Menu, Dropdown } from 'antd';
import React from 'react';
import ProTable from '@ant-design/pro-table';
import { DownOutlined } from '@ant-design/icons';
const RoleMap = {
    admin: {
        name: '管理员',
        desc: '仅拥有指定项目的权限',
    },
    operator: {
        name: '操作员',
        desc: '拥有所有权限',
    },
};
const tableListDataSource = [];
const roleMenu = (<Menu>
    <Menu.Item key="admin">管理员</Menu.Item>
    <Menu.Item key="operator">操作员</Menu.Item>
  </Menu>);
const Displaypage = () => {;
    const columns = [
        {
            dataIndex: 'Id',
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
            dataIndex: 'duedate',
            title: 'Due Date',
            width: 200,
        },
        {
            dataIndex: 'timestamp',
            title: 'Created At',
            width: 250,
        },
        {
            dataIndex: 'isComplete',
            title: 'Done/notDone',
            width: 150,
        },
    ];
    return (<ProTable columns={columns} request={(params, sorter, filter) => {
            console.log(params, sorter, filter);
            return Promise.resolve({
                data: tableListDataSource,
                success: true,
            });
        }} rowKey="outUserNo" pagination={{
            showQuickJumper: true,
        }} toolBarRender={false} search={false}/>);
};
export default Displaypage;
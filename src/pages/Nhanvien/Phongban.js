import React, { useEffect, useState } from "react";
import {Button, Col, Row, Space, Table } from 'antd';
const data = [
  {
    id: '1',
    nameofdepartment: 'Sales',
    manager: 'Nguyen Van Quan Li',
    numberofstaff: 3,
    email: 'hrstaff@test.com',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '2',
    nameofdepartment: 'Marketing',
    manager: 'Staff2',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '3',
    nameofdepartment: 'Finance',
    manager: 'Staff3',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '4',
    nameofdepartment: 'Human Resource',
    manager: 'Staff4',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '5',
    nameofdepartment: 'Operations',
    manager: 'Staff5',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '6',
    nameofdepartment: 'Engineering',
    manager: 'Staff6',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '7',
    nameofdepartment: 'Customer Support',
    manager: 'Staff7',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '8',
    nameofdepartment: 'Research and Development',
    manager: 'Staff8',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '9',
    nameofdepartment: 'Quantity Assurance',
    manager: 'Staff9',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '10',
    nameofdepartment: 'Design',
    manager: 'Staff8',
    numberofstaff: 0,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
  {
    id: '11',
    nameofdepartment: 'Chăm sóc khách hàng',
    manager: 'Staff11',
    numberofstaff: 1,
    email: '',
    phonenumber: '09xxxxxxxx'
  },
];

function Phongban() {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  
  const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },

    {
      title: 'Tên phòng ban',
      dataIndex: 'nameofdepartment',
      key: 'nameofdepartment',
    },
    {
        title: 'Quản lí',
        dataIndex: 'manager',
        key:'manager',
    },
    {
      title: 'Số nhân viên',
      dataIndex: 'numberofstaff',
      key: 'numberofstaff',
    },
    {
      title: 'Email quản lí',
      dataIndex: 'email',
      key: 'email',
    },
    {
        title:'Số điện thoại',
        dataIndex: 'phonenumber',
        key:'phonenumber',
    }
  ];
  return (
   
    <>
     {/* <Space size={30} direction="horizontal" >
       <Button
       style={{
        marginBottom: 10,
        marginTop: 10,
        backgroundColor:"#1E90FF",
     }}
       > + Thêm phòng ban</Button> 
    </Space > */}
    <Row style={{ marginBottom: 20,
                    marginTop: 20,}}>
        <Col span={16}></Col>
        <Col span={8}>
            <Button
                style={{     
                    backgroundColor:"#1E90FF"
                }}
            >Thêm phòng ban</Button>
        </Col>
    </Row>

      <Table columns={columns} 
      dataSource={data} 
      onChange={handleChange} 
      style={{
        width: '100vw'
      }}/>
    </>
  );
};

export default Phongban;

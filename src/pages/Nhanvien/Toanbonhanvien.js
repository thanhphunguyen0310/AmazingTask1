import { Col, Input, Row, Table, Select, Space, Button } from 'antd';
import React, { useState } from 'react';
const data = [
    {
      char: '',
      avt: '',
      id: '1',
      name: 'Van Nguyen',
      department: 'Sales',
      phonenumber: '09xxxxxxxx',
      gender: 'Nữ',
      email: 'hrstaff@test.com',
      bank: 'string',
      DOB:'dd/mm/yyy',
      address: 'string',
      country: 'string',
      banknumber:'string'
    },
    {
        char: '',
        avt: '',
        id: '2',
        name: 'Nguyen Van Quan Li',
        department: 'Sales',
        phonenumber: '09xxxxxxxx',
        gender: 'Nam',
        email: 'hrstaff@test.com',
        bank: 'string',
        DOB:'dd/mm/yyy',
        address: 'string',
        country: 'string',
        banknumber:'string'
      },
      {
        char: '',
        avt: '',
        id: '3',
        name: 'Nguyen Van Nhan Vien',
        department: 'Chăm sóc khách hàng',
        phonenumber: '09xxxxxxxx',
        gender: 'Nam',
        email: 'staff@test.com',
        bank: 'string',
        DOB:'dd/mm/yyy',
        address: 'string',
        country: 'string',
        banknumber:'string'
      },
      {
        char: '',
        avt: '',
        id: '4',
        name: 'Staff 4',
        department: 'Operation',
        phonenumber: '09xxxxxxxx',
        gender: 'Nam',
        email: 'staff4@test.com',
        bank: 'string',
        DOB:'dd/mm/yyy',
        address: 'string',
        country: 'string',
        banknumber:'string'
      },
      
]

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
function Toanbonhanvien() {
    const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
      };
      const columns = [
        {
            title: '',
            dataIndex:'',
            key:'',       
        },
        {
            title:'',
            dataIndex: 'avt',
            key:'avt'
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên nhân viên',
            dataIndex:'name',
            key:'name',
        },
        {
            title:'Phòng ban',
            dataIndex : "department",
            key:'department',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phonenumber',
            key:"phonenumber",
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title:'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title:'Ngân hàng',
            dataIndex:'bank',
            key:'bank',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Quốc gia',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'TK Ngân Hàng',
            dataIndex:'banknumber',
            key: 'banknumber',
        },
      ]
    return (
        <div>
            <Row style={{
                marginBottom : 25,
                marginTop: 25,
            }}>
                <Col span={8}>
                <Input.Search placeholder='Tìm kiếm' style={{width:250}}></Input.Search>
                </Col>
                <Col span={8}>
                    <Space wrap>
                        <Select
                            defaultValue="Toàn bộ phòng ban"
                            style={{with:400,}}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'Option 1',
                                    label: 'Optopn 1'
                                },
                                {
                                    value: 'Option 2',
                                    label: 'Option 2'
                                },
                            ]}
                            />
                        <Button style ={{color:"green"}}>Làm mới</Button>
                    </Space>
                </Col>
                <Col span={8}>
                    <Button style={{backgroundColor:"#1E90FF"}}>Thêm nhân viên</Button>
                </Col>
            </Row>

            <Table columns={columns} 
      dataSource={data} 
      onChange={handleChange} 
      style={{
        width: '100vw'
      }}/>
        </div>
    );
}

export default Toanbonhanvien;
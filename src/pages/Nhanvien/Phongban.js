import React, { useEffect, useState } from "react";
import { Avatar, Badge, Button, Col, Row, Space, Table } from "antd";
import { PlusOutlined,UserOutlined, BorderlessTableOutlined, MailOutlined,PhoneOutlined } from "@ant-design/icons";
const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime",
];
const data = [
  {
    id: "1",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="pink" />
        </Space>
        Sales
      </div>
  ),
    manager: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar.Group shape="circle">
          <Avatar style={{ backgroundColor: "#8A2BE2", marginRight: 10 }}>L</Avatar>
        </Avatar.Group>
        Nguyen Van Quan Li
      </div>
    ),
    numberofstaff: 3,
    email: "hrstaff@test.com",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "2",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="red" />
        </Space>
        Marketing
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "3",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="yellow" />
        </Space>
        Finance
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "4",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="orange" />
        </Space>
        Human Resource
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "5",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="cyan" />
        </Space>
        Operations
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "6",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="green" />
        </Space>
        Engineering
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "7",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="blue" />
        </Space>
            Customer Support
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "8",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="purple" />
        </Space>
        Research and Development
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "9",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="geekblue" />
        </Space>
        Quantity Assurance
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "10",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="magenta" />
        </Space>
        Design
      </div>
  ),
    manager: "",
    numberofstaff: 0,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
  {
    id: "11",
    nameofdepartment: (
      <div>
          {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{marginRight:10}}>
          <Badge color="volcano" />
        </Space>
        Chăm sóc khách hàng
      </div>
  ),
    manager: "",
    numberofstaff: 1,
    email: "",
    phonenumber: "09xxxxxxxx",
  },
];

function Phongban() {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: <span style={{ color: "#696969" }}>ID</span>,
      dataIndex: "id",
      key: "id",
    },

    {
      title: (
        <div style={{ color: "#696969" }}>
          <UserOutlined />
        <span style={{minWidth: "max-content", marginLeft: 10}}>Tên phòng ban</span>
        </div>
      ),
      dataIndex: "nameofdepartment",
      key: "nameofdepartment",
      render: (nameofdepartment) => (
        <div style={{textDecoration: "underline"}}> {nameofdepartment}</div>
      )
    },
    {
      title: (
        <div style={{ color: "#696969" }}>
          <UserOutlined />
        <span style={{minWidth: "max-content", marginLeft: 10}}>Quản lí</span>
        </div>
      ),
      dataIndex: "manager",
      key: "manager",
      render: (manager) => (
        <div style={{fontWeight: "bold"}}> 
        {manager}</div>
      
      )
    },
    {
      title: (
        <div style={{ color: "#696969" }}>
          <BorderlessTableOutlined />
        <span style={{minWidth: "max-content", marginLeft: 10}}>Số nhân viên</span>
        </div>
      ),
      dataIndex: "numberofstaff",
      key: "numberofstaff",
    },
    {
      title: (
        <div style={{ color: "#696969" }}>
          <MailOutlined />
          <span style={{minWidth: "max-content", marginLeft: 10}}>Email</span>
        </div>
      ),
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <div style={{ color: "#696969" }}>
          <PhoneOutlined />
          <span style={{minWidth: "max-content", marginLeft: 10}}>Số điện thoại</span>
        </div>
      ),
      dataIndex: "phonenumber",
      key: "phonenumber",
    },
  ];
  return (
    <>
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 3px",
        padding: "10px 0",
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 30
    }}>
      <Row justify="space-between" style={{ marginBottom: 20, marginTop: 20, marginRight: 10 }}>
        <Col span={20}></Col>
        <Col
          span={4}
        >
          <Button className="btnAdd"
            style={{
              backgroundColor: "#1E90FF",
              borderColor: "#1E90FF",
              color: "white",
            }}
          >
            + Thêm phòng ban
          </Button>
        </Col>
      </Row>
      </div>
      <div style={{margin:"0 30px 10px 20px" , boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 3px"}}>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        style={{ minWidth: "100%"}}
        scroll={{ x: "max-content" }}
        pagination={{ defaultPageSize: 8 }}
      />
      </div>
    </>
  );
}

export default Phongban;

import {
  Col,
  Input,
  Row,
  Table,
  Select,
  Space,
  Button,
  Avatar,
  Badge,
  Divider,
} from "antd";
import React, { useState } from "react";
import {
  UserOutlined,
  SmallDashOutlined,
  AlignLeftOutlined,
  UnorderedListOutlined,
  PhoneOutlined,
  MailOutlined,
  BankOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  EuroCircleOutlined,
} from "@ant-design/icons";

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
    char: <SmallDashOutlined />,
    avt: <UserOutlined />,
    id: "1",
    name: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar.Group shape="circle">
          <Avatar style={{ backgroundColor: "#8A2BE2", marginRight: 10 }}>
            N
          </Avatar>
        </Avatar.Group>
        Van Nguyen
      </div>
    ),
    department: (
      <div>
        {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{ marginRight: 10 }}>
          <Badge color="blue" />
        </Space>
        Sales
      </div>
    ),
    phonenumber: "09xxxxxxxx",
    gender: "Nữ",
    email: "hrstaff@test.com",
    bank: "string",
    DOB: "dd/mm/yyy",
    address: "string",
    country: "string",
    banknumber: "string",
    status: "on",
  },
  {
    char: <SmallDashOutlined />,
    avt: <UserOutlined />,
    id: "2",
    name: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar.Group shape="circle">
          <Avatar style={{ backgroundColor: "#8A2BE2", marginRight: 10 }}>
            L
          </Avatar>
        </Avatar.Group>
        Nguyen Van Quan Li
      </div>
    ),
    department: (
      <div>
        {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{ marginRight: 10 }}>
          <Badge color="grey" />
        </Space>
        Sales
      </div>
    ),
    phonenumber: "09xxxxxxxx",
    gender: "Nam",
    email: "hrstaff@test.com",
    bank: "string",
    DOB: "dd/mm/yyy",
    address: "string",
    country: "string",
    banknumber: "string",
    status: "off",
  },
  {
    char: <SmallDashOutlined />,
    avt: <UserOutlined />,
    id: "3",
    name: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar.Group shape="circle">
          <Avatar style={{ backgroundColor: "#8A2BE2", marginRight: 10 }}>
            V
          </Avatar>
        </Avatar.Group>
        Nguyen Van Nhan Vien
      </div>
    ),
    department: (
      <div>
        {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{ marginRight: 10 }}>
          <Badge color="blue" />
        </Space>
        Chăm sóc khách hàng
      </div>
    ),
    phonenumber: "09xxxxxxxx",
    gender: "Nam",
    email: "staff@test.com",
    bank: "string",
    DOB: "dd/mm/yyy",
    address: "string",
    country: "string",
    banknumber: "string",
    status: "on",
  },
  {
    char: <SmallDashOutlined />,
    avt: <UserOutlined />,
    id: "4",
    name: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar.Group shape="circle">
          <Avatar style={{ backgroundColor: "#8A2BE2", marginRight: 10 }}>
            S
          </Avatar>
        </Avatar.Group>
        Staff4
      </div>
    ),
    department: (
      <div>
        {colors.map((color) => (
          <Badge key={color} />
        ))}
        <Space style={{ marginRight: 10 }}>
          <Badge color="grey" />
        </Space>
        Operations
      </div>
    ),
    phonenumber: "09xxxxxxxx",
    gender: "Nam",
    email: "staff4@test.com",
    bank: "string",
    DOB: "dd/mm/yyy",
    address: "string",
    country: "string",
    banknumber: "string",
    status: "off",
  },
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function Toanbonhanvien() {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "",
      dataIndex: "char",
      key: "char",
    },
    {
      title: "",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div
          style={{
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            textAlign: "center",
            backgroundColor: status === "on" ? "#1E90FF" : "gray",
            color: "white"
          }}
        >
          <UserOutlined />
        </div>
      ),
    },
    {
      title: <span style={{ color: "#696969" }}>ID</span>,
      dataIndex: "id",
      key: "id",
    },
    {
      title: (
        <div>
          <AlignLeftOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>
            Tên nhân viên
          </span>
        </div>
      ),
      dataIndex: "name",
      key: "name",
      render: (name) => <div style={{ fontWeight: 500 }}>{name}</div>,
    },
    {
      title: (
        <div>
          <UnorderedListOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>Phòng ban</span>
        </div>
      ),
      dataIndex: "department",
      key: "department",
      render: (department) => (
        <div style={{ textDecoration: "underline" }}>{department}</div>
      ),
    },
    {
      title: (
        <div>
          <PhoneOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>
            Số điện thoại
          </span>
        </div>
      ),
      dataIndex: "phonenumber",
      key: "phonenumber",
    },
    {
      title: (
        <div>
          <UnorderedListOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>Giới tính</span>
        </div>
      ),
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (
        <div
          style={{
            textAlign: "center",
            width: "50px",
            borderRadius: "5px",
            backgroundColor: gender === "Nam" ? "#87CEFA" : "#FFC0CB",
            color: gender === "Nam" ? "#0000FF" : "#E55151",
          }}
        >
          {gender}
        </div>
      ),
    },
    {
      title: (
        <div>
          <MailOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>Email</span>
        </div>
      ),
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <div>
          <BankOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>Ngân hàng</span>
        </div>
      ),
      dataIndex: "bank",
      key: "bank",
    },
    {
      title: (
        <div>
          <HomeOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>Địa chỉ</span>
        </div>
      ),
      dataIndex: "address",
      key: "address",
    },
    {
      title: (
        <div>
          <EnvironmentOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>Quốc gia</span>
        </div>
      ),
      dataIndex: "country",
      key: "country",
    },
    {
      title: (
        <div>
          <EuroCircleOutlined />
          <span style={{ color: "#696969", marginLeft: 10 }}>TK Ngân hàng</span>
        </div>
      ),
      dataIndex: "banknumber",
      key: "banknumber",
    },
  ];
  return (
    <div>
      <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 3px",
        padding: "10px 0",
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 30
    }}>
        <Row
          justify="space-around"
          style={{
            marginBottom: 25,
            marginTop: 25,
          }}
        >
          <Col span={8}>
            <Input placeholder="Tìm kiếm" style={{ width: 250 }}></Input>
          </Col>
          <Col span={8}>
            <Space wrap>
              <Select
                defaultValue="Toàn bộ phòng ban"
                style={{ with: 400 }}
                onChange={handleChange}
                options={[
                  {
                        value: "alldepartment",
                        label: "Toàn bộ phòng ban",
                  },
                  {
                    value: "Option 1",
                    label: "Optopn 1",
                  },
                  {
                    value: "Option 2",
                    label: "Option 2",
                  },
                ]}
              />
              <Button
                style={{
                  color: "#32CD32",
                  fontWeight: 500,
                  borderColor: "#32CD32",
                }}
              >
                Làm mới
              </Button>
            </Space>
          </Col>
          <Col span={4} style={{float: "right"}}>
            <Button className="btnAdd"
              style={{
                backgroundColor: "#1E90FF",
                borderColor: "#1E90FF",
                color: "white",
              }}
            >
              + Thêm nhân viên
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ marginLeft: 20, marginRight: 30,boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 3px"  }}>
        <Table
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          style={{ minWidth: "100%"}}
          scroll={{ x: "max-content" }}
          pagination={{ defaultPageSize: 8 }}
        />
      </div>
    </div>
  );
}

export default Toanbonhanvien;

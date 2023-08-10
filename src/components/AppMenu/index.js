import React, { useEffect, useState } from "react";
import {
  UsergroupDeleteOutlined,
  MailOutlined,
  PoweroffOutlined,
  HomeOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import Title from "antd/es/skeleton/Title";
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
function AppMenu() {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const [menuKey, setMenuKey] = useState("/")
  useEffect(() => {
    if(localStorage.getItem("menustatus")){
      console.log(localStorage.getItem("menustatus"))
      setMenuKey(localStorage.getItem("menustatus"))
    }
  })

  return (
    <div className="AppMenu">
      <Layout>
         <Menu style={{
          overflow: 'auto',
          height: '100vh',
        }}
        defaultOpenKeys={["nhanvien", "tangca", "nghiphep", "donkhac", "quanliluong", "hopdong", "tuyendung"]}
          className="SideMenuVertical"
          onClick={(items) => {
            localStorage.setItem("menustatus", items.key);
            navigate(items.key);
          }}
          selectedKeys={[menuKey]}
          mode="inline"
          items={[
            { label:(
              <div style={{display: "flex", alignItems: "center"}}>
                <img style={{width:30, height:30, marginRight:10}} src="logo192.png"></img>
                <h4>Nguyễn Văn Quản Lí</h4>
              </div>

            )},
            { label: "Dashboard", key: "dashboard", icon: <HomeOutlined /> },
            {
              label: (
                <span style={{fontWeight:500}}>NHÂN VIÊN</span>
              ),
              key: "nhanvien",
              children: [
                {
                  label: "Phòng ban",
                  key: "phongban",
                  icon: <UsergroupDeleteOutlined />,
                },
                {
                  label: "Phòng ban của tôi",
                  key: "phongbancuatoi",
                  icon: <UsergroupDeleteOutlined />,
                },
                {
                  label: "Toàn bộ nhân viên",
                  key: "toanbonhanvien",
                  icon: <UsergroupDeleteOutlined />,
                },
                {
                  label: "Tạo nhân viên mới",
                  key: "taomoinhanvien",
                  icon: <UserAddOutlined />,
                },
              ],
            },
            {
              label: (<span style={{fontWeight:500}}>TĂNG CA</span>),
              key: "tangca",
              children: [
                {
                  label: "Đơn Tăng Ca Nhân Viên",
                  key: "dontangcanhanvien",
                  icon: <ClockCircleOutlined />,
                },
                {
                  label: "Đơn Tăng Ca Của Tôi",
                  key: "dontangcacuatoi",
                  icon: <ClockCircleOutlined />,
                },
              ],
            },
            {
              label: (<span style={{fontWeight:500}}>NGHỈ PHÉP</span>),
              key: "nghiphep",
              children: [
                {
                  label: "Đơn Nghỉ Phép Nhân Viên",
                  key: "donnghiphepnhanvien",
                  icon: <PoweroffOutlined />,
                },
                {
                  label: "Đơn Nghỉ Phép Của Tôi",
                  key: "donnghiphepcuatoi",
                  icon: <PoweroffOutlined />,
                },
              ],
            },
            {
              label: (<span style={{fontWeight:500}}>ĐƠN KHÁC</span>),
              key: "donkhac",
              children: [
                {
                  label: "Danh Sách Đơn Khác",
                  key: "danhsachdonkhac",
                  icon: <MailOutlined />,
                },
                {
                  label: "Đơn Khác Của Tôi",
                  key: "donkhaccuatoi",
                  icon: <MailOutlined />,
                },
              ],
            },
            {
              label: (<span style={{fontWeight:500}}>QUẢN LÍ LƯƠNG</span>),
              key: "quanliluong",
              children: [
                {
                  label: "Lương Nhân Viên",
                  key: "luongnhanvien",
                  icon: <UsergroupDeleteOutlined />,
                },
                {
                  label: "Lương Của Tôi",
                  key: "luongcuatoi",
                  icon: <UsergroupDeleteOutlined />,
                },
              ],
            },
            {
              label: (<span style={{fontWeight:500}}>HỢP ĐỒNG</span>),
              key: "hopdong",
              children: [
                {
                  label: "Hợp Đồng Của Nhân Viên",
                  key: "hopdongcuanhanvien",
                  icon: <MailOutlined />,
                },
                {
                  label: "Hợp Đồng Của Tôi",
                  key: "hopdongcuatoi",
                  icon: <MailOutlined />,
                },
              ],
            },
            {
              label: (<span style={{fontWeight:500}}>TUYỂN DỤNG</span>),
              key: "tuyendung",
              children: [
                {
                  label: "Danh Sách Ứng Viên",
                  key: "danhsachungvien",
                  icon: <UsergroupDeleteOutlined />,
                },
              ],
            },
          ]}
          
        />  
      </Layout>
    </div>
  );
}

export default AppMenu;

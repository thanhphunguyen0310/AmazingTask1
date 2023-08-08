import React, { useState } from "react";
import {
  UsergroupDeleteOutlined,
  MailOutlined,
  PoweroffOutlined,
  HomeOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
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
  return (
    <div className="AppMenu">
      <Layout>
        {/* <Sider breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
             <div className="demo-logo-vertical" />
             
        </Sider>
         */}
         <Menu style={{
          overflow: 'auto',
          height: '100vh',
        }}
          className="SideMenuVertical"
          onClick={(items) => {
            navigate(items.key);
          }}
          mode="inline"
          items={[
            { label: "Dashboard", key: "dashboard", icon: <HomeOutlined /> },
            {
              label: "NHÂN VIÊN",
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
              label: "TĂNG CA",
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
              label: "NGHỈ PHÉP",
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
              label: "ĐƠN KHÁC",
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
              label: "QUẢN LÍ LƯƠNG",
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
              label: "HỢP ĐỒNG",
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
              label: "TUYỂN DỤNG",
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

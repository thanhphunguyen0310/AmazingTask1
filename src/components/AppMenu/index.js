import React, { useState } from 'react';
import { UsergroupDeleteOutlined, 
    MailOutlined, 
    PoweroffOutlined,
    HomeOutlined,
    UserAddOutlined,
    ClockCircleOutlined,
   } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
function AppMenu() {
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
    return (
        
        <div className='AppMenu'>
            <Menu
            onClick={(items) =>{
                navigate(items.key)
            }
            
            }
      mode="inline"
      items={[
        {label:"Dashboard", key:"dashboard", icon: <HomeOutlined />},
        {label: "NHÂN VIÊN", key:"nhân viên",
        children: [
          {label: "Phòng ban", key: "phòng ban", icon: <UsergroupDeleteOutlined />},
          {label: "Phòng ban của tôi", key: "phòng ban của tôi",icon: <UsergroupDeleteOutlined />},
          {label: "Toàn bộ nhân viên", key: "toàn bộ nhân viên",icon: <UsergroupDeleteOutlined />},
          {label: "Tạo nhân viên mới", key: "tạo nhân viên mới",icon: <UserAddOutlined />},
        ]},
        {label: "TĂNG CA", key:"tăng ca",
        children: [
          {label: "Đơn Tăng Ca Nhân Viên", key: "đơn tăng ca nhân viên", icon: <ClockCircleOutlined />},
          {label: "Đơn Tăng Ca Của Tôi", key: "đơn tăng ca của tôi", icon: <ClockCircleOutlined />},
        ]},
        {label: "NGHỈ PHÉP", key:"nghỉ phép",
        children: [
          {label: "Đơn Nghỉ Phép Nhân Viên", key: "đơn nghỉ phép nhân viên", icon: <PoweroffOutlined />},
          {label: "Đơn Nghỉ Phép Của Tôi", key: "đơn nghỉ phép của tôi", icon: <PoweroffOutlined />},
        ]},
        {label: "ĐƠN KHÁC", key:"đơn khác",
        children: [
          {label: "Danh Sách Đơn Khác", key: "danh sách đơn khác", icon: <MailOutlined />},
          {label: "Đơn Khác Của Tôi", key: "đơn khác của tôi",icon: <MailOutlined />},
        ]},
        {label: "QUẢN LÍ LƯƠNG", key:"quản lí lương",
        children: [
          {label: "Lương Nhân Viên", key: "lương nhân viên", icon: <UsergroupDeleteOutlined />},
          {label: "Lương Của Tôi", key: "lương của tôi", icon: <UsergroupDeleteOutlined />},
        ]},
        {label: "HỢP ĐỒNG", key:"hợp đồng",
        children: [
          {label: "Hợp Đồng Của Nhân Viên", key: "hợp đồng của nhân viên", icon: <MailOutlined />},
          {label: "Hợp Đồng Của Tôi", key: "hợp đồng của tôi", icon: <MailOutlined />},
        ]},
        {label: "TUYỂN DỤNG", key:"tuyển dụng",
        children: [
          {label: "Danh Sách Ứng Viên", key: "danh sách ứng viên", icon: <UsergroupDeleteOutlined />},
        ]},
      ]}
      />
        </div>
    );
}

export default AppMenu;
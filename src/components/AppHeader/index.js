import React from 'react';
import {LogoutOutlined} from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { Layout } from 'antd';



function AppHeader() {
    return (
        <div className='AppHeader'>
            <Layout>
            <Header style={{padding: 0, backgroundColor: "white"}}>
                Danh Sách Phòng Ban
                <LogoutOutlined style ={{fontSize: 24, color:'blue', marginRight: 30}}/>
            </Header>   
            {/* <h3>Danh Sách Phòng Ban</h3> */}
            {/* <LogoutOutlined style ={{fontSize: 24, color:'blue', marginRight: 30}}/> */}
            </Layout>
        </div>
    );
}

export default AppHeader;
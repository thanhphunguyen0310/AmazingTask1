import React from 'react';
import {LogoutOutlined} from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { Button, Card, Col, Layout, Row, Space } from 'antd';
import Title from 'antd/es/skeleton/Title';



function AppHeader(props) {
    return (
        <div className='AppHeader'>
            <h2
                style={{marginLeft: 20}}
            >Quản Lí</h2>
            {/* <LogoutOutlined style ={{fontSize: 24, color:'blue', marginRight: 30}}/>  */}
            <Button style={{marginRight: 11}}><LogoutOutlined style ={{fontSize: 24, color:'blue'}}/></Button>          
        </div>
    );
}

export default AppHeader;
import React from 'react';
import {LogoutOutlined} from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { Card, Col, Layout, Row, Space } from 'antd';
import Title from 'antd/es/skeleton/Title';



function AppHeader() {
    return (
        <div className='AppHeader'>
            <>
            {/* <Header style={{
            padding: 0,
            background: "colorBgContainer",
          }}>
                Danh Sách Phòng Ban
                <LogoutOutlined style ={{fontSize: 24, color:'blue', marginRight: 30}}/>
            </Header>    */}
            {/* <Space>
                <Row>
                    <Col span={16}>Danh Sách Phòng Ban</Col>
                    <Col span={8}> <LogoutOutlined style ={{fontSize: 24, color:'blue'}}/></Col>
                </Row>
            </Space> */}
            <h3
                style={{marginLeft: 20}}
            >Danh Sách Phòng Ban</h3>
            <LogoutOutlined style ={{fontSize: 24, color:'blue', marginLeft: 50}}/>
            
            </>
        </div>
    );
}

export default AppHeader;
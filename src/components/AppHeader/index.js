import React from 'react';
import {LogoutOutlined} from '@ant-design/icons';



function AppHeader() {
    return (
        <div className='AppHeader'>
            
            <h3>Danh Sách Phòng Ban</h3>
            <LogoutOutlined style ={{fontSize: 24, color:'blue', marginRight: 30}}/>
            
        </div>
    );
}

export default AppHeader;
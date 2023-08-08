import React from 'react';
import Phongban from '../../pages/Nhanvien/Phongban';
import Toanbonhanvien from '../../pages/Nhanvien/Toanbonhanvien';
import { Route, Routes } from 'react-router-dom';

function AppRoutes() {
    return (
            <Routes>
            <Route path="/phongban" element={<Phongban />}></Route>
            <Route path="/toanbonhanvien" element={<Toanbonhanvien />}></Route>
            </Routes> 
               
    );
}

export default AppRoutes;
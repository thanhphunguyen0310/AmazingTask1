import { Space } from "antd";
import './App.css';
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";
import AppContent from "./components/AppContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Phongban from "./pages/Nhanvien/Phongban";
import Toanbonhanvien from "./pages/Nhanvien/Toanbonhanvien";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Space>
          <AppMenu></AppMenu>
          <AppContent></AppContent>
      </Space>
   
      <Routes>
        <Route path="/phongban" element={<Phongban />}></Route>
        <Route path="/toanbonhanvien" element={<Toanbonhanvien />}></Route>
      </Routes>


    </div>
  );
}

export default App;

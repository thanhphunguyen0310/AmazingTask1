import { Col, Row, Space } from "antd";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";
import AppContent from "./components/AppContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Phongban from "./pages/Nhanvien/Phongban";
import Toanbonhanvien from "./pages/Nhanvien/Toanbonhanvien";

function App() {
  return (
    <div className="App">
      {/* <AppHeader></AppHeader> */}
      <div className="SideMenuAndPageContent">
        <Row>
          <Col span={4}>
            <AppMenu />
          </Col>
          <Col span={20}>
            <AppHeader />
            <AppContent />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;

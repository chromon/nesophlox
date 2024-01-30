import {  Layout, theme } from "antd";
import Title from "antd/es/typography/Title";
import logoImg from '../../assets/vite.svg'
import React from "react";

const { Header } = Layout;


// 主页 Header
const AdminHeader: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
                <img width="auto" height="24" src={logoImg} alt="logo" />
                <Title level={5} style={{ margin: '0 10px' }}>
                    Admin Pro
                </Title>
            </Header>
        </>
    );
}

export default AdminHeader;
import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../../components/header';
import AdminSider from '../../components/sider';

// 后台主页
const Admin: React.FC = () => {

    return (
        <Layout>
            {/* Header */}
            <AdminHeader />
            <Layout>
                {/* 侧边栏 Sider */}
                <AdminSider />
                {/* 中心内容页子路由 Router*/}
                <Outlet />
            </Layout>
        </Layout>
    );
};

export default Admin;
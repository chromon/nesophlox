import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../../components/header';
import AdminSider from '../../components/sider';

// 后台主页
const Admin: React.FC = () => {

    return (
        <>
            <ConfigProvider
                theme={{
                    algorithm: theme.defaultAlgorithm
                    // algorithm: theme.darkAlgorithm
                }}>
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
            </ConfigProvider>
        </>
    );
};

export default Admin;
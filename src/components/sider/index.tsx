import { useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import {
    DashboardOutlined,
    FormOutlined,
    TableOutlined,
    ProfileOutlined,
    CheckCircleOutlined,
    WarningOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        label,
        key,
        icon,
        children,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [

    getItem('Dashboard', '/dashboard', <DashboardOutlined />, [
        getItem(<Link to="/dashboard/default">默认页</Link>, '/dashboard/default'),
    ]),

    getItem('表单页', '/form', <FormOutlined />, [
        getItem(<Link to="/form/basic">基础表单</Link>, '/form/basic'),
    ]),

    getItem('列表页', '/list', <TableOutlined />, [
        getItem(<Link to="/list/table">标准列表</Link>, '/list/table'),
    ]),

    getItem('详情页', '/profile', <ProfileOutlined />, [
        getItem(<Link to="/profile/basic">基础详情</Link>, '/profile/basic'),
    ]),

    getItem('结果页', '/result', <CheckCircleOutlined />, [
        getItem(<Link to="/result/success">成功</Link>, '/result/success'),
        getItem(<Link to="/result/fail">失败</Link>, '/result/fail'),
    ]),

    getItem('异常页', '/exception', <WarningOutlined />, [
        getItem(<Link to="/exception/403">403</Link>, '/exception/403'),
        getItem(<Link to="/exception/404">404</Link>, '/exception/404'),
        getItem(<Link to="/exception/500">500</Link>, '/exception/500'),
    ]),

    getItem('账户页', '/account', <UserOutlined />, [
        getItem(<Link to="/account/setting">个人设置</Link>, '/account/setting'),
    ]),

];

// 侧边栏
const AdminSider: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <>
            <Sider width={260}  collapsible collapsed={collapsed} 
                onCollapse={(value) => setCollapsed(value)} theme='light'>
                <Menu
                    mode="inline"
                    items={items}
                    defaultOpenKeys={['/dashboard']}
                    defaultSelectedKeys={['/dashboard/default']}
                    style={{ height: '100%', borderRight: 0 }}
                    onClick={onClick}
                />
            </Sider>
        </>
    );
}

export default AdminSider;
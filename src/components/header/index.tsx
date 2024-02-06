import { Avatar, Dropdown, Flex, Layout, MenuProps, Space, Switch, theme } from "antd";
import Title from "antd/es/typography/Title";
import logoImg from '../../assets/vite.svg'
import avatarImg from '../../assets/react.svg'
import React from "react";
import {
    SunFilled,
    MoonFilled
} from '@ant-design/icons';

const { Header } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                退出登录
            </a>
        ),
    },
];

// 主页 Header
const AdminHeader: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer, justifyContent: 'space-between' }}>
                <Flex>
                    <img width="auto" height="24" src={logoImg} alt="logo" style={{ margin: 'auto' }} />
                    <Title level={5} style={{ margin: '0 10px' }}>
                        Admin Pro
                    </Title>
                </Flex>
                <Space direction="horizontal" style={{ justifyContent: 'flex-end' }}>
                    <Switch
                        checkedChildren={<SunFilled />}
                        unCheckedChildren={<MoonFilled />}
                        defaultChecked
                    />
                    <Dropdown menu={{ items }}>
                        <Avatar onClick={e => e?.preventDefault()} src={<img src={avatarImg} alt="avatar" />} />
                    </Dropdown>
                </Space>
            </Header>
        </>
    );
}

export default AdminHeader;
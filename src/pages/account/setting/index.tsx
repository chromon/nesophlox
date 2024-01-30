import { Breadcrumb, Layout, Menu, MenuProps, Typography, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
): MenuItem {
    return {
        label,
        key,
    } as MenuItem;
}

const items: MenuProps['items'] = [

    getItem(<Link to="/account/setting/basic">基础设置</Link>, '/basic'),
    getItem(<Link to="/account/setting/security">安全设置</Link>, '/security'),
    getItem(<Link to="/account/setting/binding">账号绑定</Link>, '/binding'),
    getItem(<Link to="/account/setting/notification">消息通知</Link>, '/notification'),
];

// 个人设置
const Setting: React.FC = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb items={[{ title: 'Account' }, { title: 'Setting' }]} style={{ margin: '16px 0' }} />
                <Content
                    style={{
                        padding: 48,
                        margin: 0,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Typography>
                        <Title level={4}>个人设置</Title>
                        <Paragraph>
                            提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。
                        </Paragraph>
                    </Typography>

                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['/basic']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    />

                    {/* 中心内容标签块 */}
                    <Content
                        style={{
                            padding: 18,
                            margin: 0,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                            {/* 标签块子路由 */}
                            <Outlet></Outlet>
                    </Content>
                </Content>
            </Layout>
        </>
    )
};

export default Setting;
import { Breadcrumb, Layout, Typography, theme } from 'antd';

const { Title, Paragraph } = Typography;

const { Content } = Layout;

// dashboard 默认页
const Default: React.FC = () => {
    
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb items={[{ title: 'DashBoard' }, { title: 'Default' }]} style={{ margin: '16px 0' }} />
                <Content
                    style={{
                        padding: 48,
                        margin: 0,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Typography>
                        <Title level={4}>欢迎使用 Ant Design Pro</Title>
                        <Paragraph>
                            Ant Pro 是一个整合了 Ant Design 和 ProComponents 的脚手架方案。致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。
                        </Paragraph>
                    </Typography>

                </Content>
            </Layout>
        </>
    );
}

export default Default;
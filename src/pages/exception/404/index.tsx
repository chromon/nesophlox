
import { Breadcrumb, Button, Layout, Result, Typography, theme } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

// 异常页 - 404
const Exception404: React.FC = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb items={[{ title: 'Exception' }, { title: '404' }]} style={{ margin: '16px 0' }} />
                <Content
                    style={{
                        padding: 48,
                        margin: 0,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Typography>
                        <Title level={4}>基础结果</Title>
                        <Paragraph>
                            提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。
                        </Paragraph>
                    </Typography>

                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button type="primary">Back Home</Button>}
                    />

                </Content>
            </Layout>
        </>
    )
};

export default Exception404;

import { Breadcrumb, Button, Layout, Result, Typography, theme } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

// 结果页 - 失败
const ResultFail: React.FC = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb items={[{ title: 'Result' }, { title: 'Fail' }]} style={{ margin: '16px 0' }} />
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
                        status="error"
                        title="Submission Failed"
                        subTitle="Please check and modify the following information before resubmitting."
                        extra={[
                            <Button type="primary" key="console">
                                Go Console
                            </Button>,
                            <Button key="buy">Buy Again</Button>,
                        ]}
                    ></Result>

                </Content>
            </Layout>
        </>
    )
};

export default ResultFail;
import {
    Badge, Breadcrumb, Descriptions, DescriptionsProps,
    Divider, Layout, Typography, theme
} from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'UserName',
        children: 'Zhou Maomao',
    },
    {
        key: '2',
        label: 'Telephone',
        children: '1810000000',
    },
    {
        key: '3',
        label: 'Live',
        children: 'Hangzhou, Zhejiang',
    },
    {
        key: '4',
        label: 'Remark',
        children: 'empty',
    },
    {
        key: '5',
        label: 'Address',
        children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
];

const items2: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Product',
        children: 'Cloud Database',
    },
    {
        key: '2',
        label: 'Billing Mode',
        children: 'Prepaid',
    },
    {
        key: '3',
        label: 'Automatic Renewal',
        children: 'YES',
    },
    {
        key: '4',
        label: 'Order time',
        children: '2018-04-24 18:00:00',
    },
    {
        key: '5',
        label: 'Usage Time',
        children: '2019-04-24 18:00:00',
        span: 2,
    },
    {
        key: '6',
        label: 'Status',
        children: <Badge status="processing" text="Running" />,
        span: 3,
    },
    {
        key: '7',
        label: 'Negotiated Amount',
        children: '$80.00',
    },
    {
        key: '8',
        label: 'Discount',
        children: '$20.00',
    },
    {
        key: '9',
        label: 'Official Receipts',
        children: '$60.00',
    },
    {
        key: '10',
        label: 'Config Info',
        children: (
            <>
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
            </>
        ),
    },
];

// 详情页 - 基础详情
const ProfileBasic: React.FC = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb items={[{ title: 'Profile' }, { title: 'Basic' }]} style={{ margin: '16px 0' }} />
                <Content
                    style={{
                        padding: 48,
                        margin: 0,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Typography>
                        <Title level={4}>基础详情页</Title>
                        <Paragraph>
                            简单的表格，最后一列是各种操作。
                        </Paragraph>
                    </Typography>

                    <Descriptions title="User Info" items={items} />
                    <Divider />
                    <Descriptions title="User Info" bordered items={items2} />
                </Content>
            </Layout>
        </>
    )
};

export default ProfileBasic;
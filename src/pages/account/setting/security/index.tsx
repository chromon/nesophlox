import { List } from "antd";

const data = [
    {
        title: '账号密码',
        description: '当前密码强度：强',
    },
    {
        title: '密保手机',
        description: '已绑定手机: 138****8293',
    },
    {
        title: '密保问题',
        description: '未设置密保问题，密保问题可有效保护账户安全',
    },
    {
        title: '备用邮箱',
        description: '已绑定邮箱: ant***sign.com',
    },
];

// 个人设置 - 安全设置
const SecuritySetting: React.FC = () => {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">修改</a>]}>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={<span>{item.description}</span>}
                        />
                    </List.Item>
                )}
            />
        </>
    );
}

export default SecuritySetting;
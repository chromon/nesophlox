import { List } from "antd";

const data = [
    {
        title: '绑定微信',
        description: '当前未绑定微信账号',
    },
    {
        title: '绑定支付宝',
        description: '当前未绑定支付宝账号',
    },
];

// 个人设置 - 账号绑定
const BindingSetting: React.FC = () => {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">绑定</a>]}>
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

export default BindingSetting;
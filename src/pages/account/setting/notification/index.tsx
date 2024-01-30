import { List, Switch } from "antd";

const data = [
    {
        title: '账户密码',
        description: '其他用户的消息将以站内信的形式通知',
    },
    {
        title: '系统消息',
        description: '系统消息将以站内信的形式通知',
    },
    {
        title: '待办任务',
        description: '待办任务将以站内信的形式通知',
    },
];

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};

// 个人设置 - 消息通知
const NotificationSetting: React.FC = () => {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        actions={[<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked onChange={onChange}/>]}>
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

export default NotificationSetting;
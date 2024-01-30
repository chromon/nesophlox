import {
    Breadcrumb, Button, Cascader, Checkbox, ColorPicker,
    DatePicker, Form, Input, InputNumber, Layout, Radio, Select,
    Slider, Switch, TreeSelect, Typography, Upload, theme
} from "antd";
import { PlusOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const { Content } = Layout;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

// 表单页 - 基础表单
const AdminForm: React.FC = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb items={[{ title: 'Form' }, { title: 'Basic' }]} style={{ margin: '16px 0' }} />
                <Content
                    style={{
                        padding: 48,
                        margin: 0,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Typography>
                        <Title level={4}>基础表单</Title>
                        <Paragraph>
                            表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
                        </Paragraph>
                    </Typography>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        style={{ maxWidth: 600, marginTop: 48 }}
                    >
                        <Form.Item label="Input">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Select">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="TreeSelect">
                            <TreeSelect
                                treeData={[
                                    { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
                            <Checkbox>Checkbox</Checkbox>
                        </Form.Item>
                        <Form.Item label="Radio">
                            <Radio.Group>
                                <Radio value="apple"> Apple </Radio>
                                <Radio value="pear"> Pear </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Cascader">
                            <Cascader
                                options={[
                                    {
                                        value: 'zhejiang',
                                        label: 'Zhejiang',
                                        children: [
                                            {
                                                value: 'hangzhou',
                                                label: 'Hangzhou',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="RangePicker">
                            <RangePicker />
                        </Form.Item>
                        <Form.Item label="InputNumber">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="TextArea">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="Switch" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload action="/upload.do" listType="picture-card">
                                <button style={{ border: 0, background: 'none' }} type="button">
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>
                        <Form.Item label="Button">
                            <Button>Button</Button>
                        </Form.Item>
                        <Form.Item label="Slider">
                            <Slider />
                        </Form.Item>
                        <Form.Item label="ColorPicker">
                            <ColorPicker />
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </>
    );
}

export default AdminForm;
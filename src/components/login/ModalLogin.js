import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export default ({ children }) => {

    let [visible, setVisible] = useState(false);

    // 保存
    const handleOk = () => {
        setVisible(false);
    };

    // 取消
    const handleCancel = () => {
        setVisible(false);
    };

    // 开启弹出框
    const showModal = () => {
        setVisible(true);
    };

    return (
        <div className="modal-login">
            <div onClick={showModal}>{children}</div>
            <Modal
                destroyOnClose
                title="登录"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={handleOk}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "请输入用户名" }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "请输入密码" }]}
                    >
                        <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block={true} htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

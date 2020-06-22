import React, { useState } from "react";
import { Modal } from "antd";

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
                centered
                destroyOnClose
                title="登录"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
}

import React, { useState } from "react";
import { Avatar } from "antd";
import { EyeFilled } from "@ant-design/icons";
import "./ArticleDetail.less";
import MarkdownRender from "../components/markdown/MarkdownRender";
import CommentArea from "../components/common/CommentArea";

export default () => {
    let [img] = useState("https://yevpt-web-1252573911.cos.ap-beijing.myqcloud.com/post/images/861f2370efbc03e60aa02741f26cbc63.png?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDSFm36bspY2JNBi9Phusb4IaiaFenpKp9%26q-sign-time%3D1591690076%3B1591693676%26q-key-time%3D1591690076%3B1591693676%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3D6e81f501f0017c7564699ae3d5640ca09bb2bedb");
    let [content] = useState("# 123");
    return (
        <div className="article-detail">
            <img src={img} alt="" />
            <div className="article-container">
                <div className="title">
                    你们轻轻唱，听完我就走。
                </div>
                <div className="info">
                    <div className="left">
                        <Avatar size={48}>U</Avatar>
                        <div>
                            <div className="name">NickYang</div>
                            <div className="time">一月 02, 2020</div>
                        </div>
                    </div>
                    <div className="right">
                        <EyeFilled />
                        354
                    </div>
                </div>
                <div className="content">
                    <MarkdownRender content={content} />
                </div>
            </div>
            <CommentArea />
        </div>
    );
}

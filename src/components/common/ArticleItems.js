import React, { useState } from "react";
import ModuleTitle from "./ModuleTitle";
import { EyeFilled, HeartFilled, MessageFilled } from "@ant-design/icons";
import "./ArticleItems.less";

export default () => {
    let [articleList] = useState([
        {
            id: 1,
            imgPath: "https://yevpt-web-1252573911.cos.ap-beijing.myqcloud.com/post/images/861f2370efbc03e60aa02741f26cbc63.png?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDSFm36bspY2JNBi9Phusb4IaiaFenpKp9%26q-sign-time%3D1591608878%3B1591612478%26q-key-time%3D1591608878%3B1591612478%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3D224c8e22bff7dec456c7b8f0f2ecf6f6a4529594",
            title: "内网穿透神器-NPS使用教程",
            createTime: "五月 24, 2020",
            desc: "Nps是一款轻量级、高性能、功能强大的内网穿透代理服务器。几乎支持所有协议，支持内网http代理、内网socks5代理、p2p等，简洁但功能强大的WEB管理界面...",
            readCount: 52,
            likeCount: 10,
            commentNum: 5
        }
    ]);
    return (
        <div className="article-items">
            <ModuleTitle value="全部文章" />
            <div className="article-content">
                {
                    articleList.map(article => (
                        <div className="article-item" key={article.id}>
                            <img src={article.imgPath} alt={article.title} />
                            <div className="title">{article.title}</div>
                            <div className="create-time">{article.createTime}</div>
                            <div className="desc">{article.desc}</div>
                            <div className="bottom">
                                <div className="read">开始阅读</div>
                                <div className="count">
                                    <span className="count-item"><EyeFilled /> {article.readCount}</span>
                                    <span className="count-item"><HeartFilled /> {article.likeCount}</span>
                                    <span className="count-item"><MessageFilled /> {article.commentNum}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

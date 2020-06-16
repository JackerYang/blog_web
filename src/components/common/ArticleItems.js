import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ModuleTitle from "./ModuleTitle";
import { EyeFilled, HeartFilled, MessageFilled } from "@ant-design/icons";
import "./ArticleItems.less";

export default () => {
    let history = useHistory();

    let [articleList] = useState([
        {
            id: 1,
            imgPath: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            title: "内网穿透神器-NPS使用教程",
            createTime: "五月 24, 2020",
            desc: "Nps是一款轻量级、高性能、功能强大的内网穿透代理服务器。几乎支持所有协议，支持内网http代理、内网socks5代理、p2p等，简洁但功能强大的WEB管理界面...",
            readCount: 52,
            likeCount: 10,
            commentNum: 5
        }
    ]);

    const readArticle = id => {
        if (history.location.pathname !== `/post/${id}`) {
            history.push(`/post/${id}`);
        }
    };

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
                                <div className="read" onClick={() => {
                                    readArticle(article.id);
                                }}>开始阅读
                                </div>
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

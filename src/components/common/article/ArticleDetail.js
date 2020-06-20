import React, { useState } from "react";
import { Avatar } from "antd";
import { EyeFilled } from "@ant-design/icons";
import "./ArticleDetail.less";
import Render from "../../markdown/MarkdownRender";
import ModuleTitle from "../ModuleTitle";
import CommentPost from "../comment/CommentPost";
import CommentArea from "../comment/CommentArea";

export default () => {
    let [img] = useState("https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg");

    const addComment = commentContent => {
        console.log(commentContent);
    };

    return (
        <div className="article-detail">
            <img src={img} alt="img" />
            <div className="article-container">
                <div className="title">
                    天行健，君子以自强不息。
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
                <div className="content" dangerouslySetInnerHTML={{ __html: Render("# 123") }} />
            </div>
            <p className="line" />
            <div className="article-comment">
                <ModuleTitle value="评论" />
                <CommentPost addComment={addComment} />
                <CommentArea />
            </div>
        </div>
    );
}

import React, { useState } from "react"
import { Avatar } from "antd"
import { EyeFilled } from "@ant-design/icons"
import "./ArticleDetail.less"
import Render from "../../components/markdown/MarkdownRender"
import ModuleTitle from "../../components/common/ModuleTitle"
import ArticleBelongTags from "../../components/article/ArticleBelongTags"
import CommentPost from "../../components/common/comment/CommentPost"
import CommentArea from "../../components/common/comment/CommentArea"
import WaterWave from "../../components/effect/WaterWave"

export default () => {
    let [img] = useState("")

    const addComment = commentContent => {
        console.log(commentContent)
    }

    return (
        <div className="article-detail">
            {
                img && <img src={img} alt="img" />
            }
            <div className="article-container">
                <div className="title">
                    天行健，君子以自强不息。
                </div>
                <ArticleBelongTags
                    categories={[{ id: 1, name: "css" }, { id: 2, name: "vue" }, { id: 3, name: "html" }]} />
                <div className="info">
                    <div className="left">
                        <Avatar size={48}>U</Avatar>
                        <div>
                            <div className="name">NickYang</div>
                            <div className="time">一月 02, 2020</div>
                        </div>
                    </div>
                    <div className="right">
                        <WaterWave color="#999" />
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
    )
}

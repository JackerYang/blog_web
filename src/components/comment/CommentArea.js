import React, { useEffect, useState } from "react";
import { Avatar, Skeleton } from "antd";
import { EditFilled, LikeFilled, SwapOutlined } from "@ant-design/icons";
import "./CommentArea.less";

export default () => {

    let [comments, setComments] = useState([]);
    let [commentsLoading, setCommentLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setComments([
                {
                    id: 1,
                    author: {
                        avatar_url: "https://pic1.zhimg.com/7be980a0f_r.jpg",
                        name: "哈哈哈"
                    },
                    create_time: "2020-06-14",
                    content: "非常同意关于优化re-render的描述，vdom快不代表re-render快，目前flux没有找到一种最优实现，在nested components中经常会遇到性能问题。react目前的第三方组件越来越像当年的jQuery Plugin，参差不齐的，用的爽的实在很少。。",
                    vote_count: 28,
                    children: [
                        {
                            id: 11,
                            author: {
                                avatar_url: "https://pic1.zhimg.com/7be980a0f_r.jpg",
                                name: "嘻嘻嘻"
                            },
                            reply_to_author: {
                                avatar_url: "https://pic1.zhimg.com/7be980a0f_r.jpg",
                                name: "哈哈哈"
                            },
                            create_time: "2020-06-14",
                            content: "非常同意关于优化re-render的描述，vdom快不代表re-render快，目前flux没有找到一种最优实现，在nested components中经常会遇到性能问题。react目前的第三方组件越来越像当年的jQuery Plugin，参差不齐的，用的爽的实在很少。。",
                            vote_count: 28
                        }
                    ]
                },
                {
                    id: 2,
                    author: {
                        avatar_url: "https://pic1.zhimg.com/7be980a0f_r.jpg",
                        name: "嗯嗯嗯"
                    },
                    create_time: "2020-06-16",
                    content: "非常同意关于优化re-render的描述，vdom快不代表re-render快，目前flux没有找到一种最优实现，在nested components中经常会遇到性能问题。react目前的第三方组件越来越像当年的jQuery Plugin，参差不齐的，用的爽的实在很少。。",
                    vote_count: 58,
                    children: []
                }
            ]);
            setCommentLoading(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="comment-area">
            <div className="title">
                <div className="nums">
                    53条评论
                </div>
                <div className="sort">
                    <SwapOutlined />
                    时间排序
                </div>
            </div>
            <div className="content">
                <Skeleton loading={commentsLoading} active avatar={{ shape: "square" }} paragraph={{ rows: 4 }} />
                {
                    comments.map(comment => (
                        <div className="item" key={comment.id}>
                            <div className="info">
                                <div className="user">
                                    <Avatar shape="square" src={comment.author.avatar_url} />
                                    {comment.author.name}
                                </div>
                                <div className="time">
                                    {comment.create_time}
                                </div>
                            </div>
                            <div className="comment">
                                {comment.content}
                            </div>
                            <div className="review">
                                <div className="btn">
                                    <LikeFilled />
                                    {comment.vote_count}
                                </div>
                                <div className="btn">
                                    <EditFilled />
                                    回复
                                </div>
                            </div>

                            {/*子评论*/}
                            {
                                comment.children.map(subComment => (
                                    <div className="sub-item" key={subComment.id}>
                                        <div className="info">
                                            <div className="user">
                                                <Avatar shape="square" src={subComment.author.avatar_url} />
                                                {subComment.author.name}
                                                <span className="reply">回复</span>
                                                {subComment.reply_to_author.name}
                                            </div>
                                            <div className="time">
                                                {subComment.create_time}
                                            </div>
                                        </div>
                                        <div className="comment">
                                            {subComment.content}
                                        </div>
                                        <div className="review">
                                            <div className="btn">
                                                <LikeFilled />
                                                {comment.vote_count}
                                            </div>
                                            <div className="btn">
                                                <EditFilled />
                                                回复
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

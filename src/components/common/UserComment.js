import { Avatar, Button, Input, Skeleton, Tag } from "antd"
import { useEffect, useState } from "react"
import CustomAnchor from "./CustomAnchor"
import "./UserComment.less"
import WrapperCard from "./WrapperCard"

const UserComment = () => {
    const [text, setText] = useState("")
    const [canPublish, setCanPublish] = useState(false)
    const [loading, setLoading] = useState(true)
    const [replyToAuthor, setReplyToAuthor] = useState(null)
    const [list, setList] = useState([])

    const getData = () => {
        setLoading(true)
        setTimeout(() => {
            setList([
                {
                    id: 1,
                    avatar: "",
                    authorName: "哈哈哈",
                    authorId: 1,
                    time: "2021-02-20 10:45:09",
                    text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
                    like: 234,
                    subComments: [
                        {
                            id: 1,
                            avatar: "",
                            authorName: "哈哈哈",
                            authorId: 1,
                            receiveAuthorName: "嘿嘿和",
                            time: "2021-02-20 10:45:09",
                            text: "但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话",
                            like: 234
                        },
                        {
                            id: 2,
                            avatar: "",
                            authorName: "哈哈哈",
                            authorId: 1,
                            receiveAuthorName: "嘿嘿和",
                            time: "2021-02-20 10:45:09",
                            text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
                            like: 234
                        }
                    ]
                },
                {
                    id: 2,
                    avatar: "",
                    authorName: "哈哈哈",
                    authorId: 1,
                    time: "2021-02-20 10:45:09",
                    text: "类似咱们国家的几位顶流，我也没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。类似咱们国家的几位顶流，我也类似咱们国家的几位顶流，我也没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。类似咱们国家的几位顶流，我也没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。",
                    like: 234,
                    subComments: []
                },
                {
                    id: 3,
                    avatar: "",
                    authorName: "哈哈哈",
                    authorId: 1,
                    time: "2021-02-20 10:45:09",
                    text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
                    like: 234,
                    subComments: [
                        {
                            id: 1,
                            avatar: "",
                            authorName: "哈哈哈",
                            authorId: 1,
                            receiveAuthorName: "嘿嘿和",
                            time: "2021-02-20 10:45:09",
                            text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
                            like: 234
                        }
                    ]
                }
            ])
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        getData()
    }, [])

    // 输入事件
    const textChange = e => {
        setText(e.target.value)
    }

    // 监听输入内容，控制按钮是否可以点击
    useEffect(() => {
        setCanPublish(!!text.trim())
    }, [text])

    // 发布评论
    const publish = () => {
        console.log(text)
    }

    // 回复评论
    const replyComment = author => {
        setReplyToAuthor(author)
    }

    // 撤销回复评论
    const clearReplyToAuthor = () => {
        setReplyToAuthor(null)
    }

    return (
        <WrapperCard title="评论" iconColor="#ffc53d" iconBackground="#fff6e5" icon="icon-pinglun1">
            <div className="user-comment">
                <div className="publish-comment" id="input-comment">
                    <Input.TextArea allowClear onChange={textChange} autoSize={{
                        minRows: 3,
                        maxRows: 18
                    }} placeholder="请输入评论" showCount maxLength={999} />
                    {
                        replyToAuthor &&
                        <Tag className="reply-author" color="orange" visible={replyToAuthor} closable onClose={clearReplyToAuthor}>回复 {replyToAuthor.name}</Tag>
                    }
                    <div className="publish-comment-btn">
                        <Button onClick={publish} disabled={!canPublish} type="primary">发布</Button>
                    </div>
                </div>

                <div className="comment-list">
                    {
                        loading &&
                        <div className="comment-list-skeleton">
                            {
                                Array.from({ length: 3 }).map((v, k) => (
                                    <div key={k} className="item-skeleton">
                                        <Skeleton.Button className="avatar-skeleton" shape="circle" active={true} />
                                        <div className="content-skeleton">
                                            <div className="info-skeleton">
                                                <Skeleton rows={1} title={{ width: 120 }} paragraph={false} active={true} />
                                                <Skeleton rows={1} title={{ width: 120 }} paragraph={false} active={true} />
                                            </div>
                                            <Skeleton className="text-skeleton" title={false} paragraph={{ rows: 2 }} active={true} />
                                            <div className="control-skeleton">
                                                <Skeleton rows={1} title={true} paragraph={false} active={true} />
                                                <Skeleton rows={1} title={true} paragraph={false} active={true} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    }
                    {
                        list.map(item => (
                            <div key={item.id} className="item">
                                <div className="avatar">
                                    <Avatar src={item.avatar} />
                                </div>
                                <div className="item-content">
                                    <div className="comment-info">
                                        <span className="author-name">{item.authorName}</span>
                                        <span className="comment-time">{item.time}</span>
                                    </div>
                                    <div className="comment-text">{item.text}</div>
                                    <div className="comment-control">
                                        <div className="like">
                                            <i className="iconfont icon-dianzan" />
                                            <span>{item.like}</span>
                                        </div>
                                        <CustomAnchor offsetTop={168} anchorId="input-comment">
                                            <div className="reply" onClick={() => {
                                                replyComment({ name: item.authorName, id: item.authorId })
                                            }}>
                                                <i className="iconfont icon-icon_reply" />
                                                <span>回复</span>
                                            </div>
                                        </CustomAnchor>
                                    </div>

                                    {
                                        item.subComments.map(subItem => (
                                            <div key={subItem.id} className="sub-item">
                                                <div className="avatar">
                                                    <Avatar src={subItem.avatar} />
                                                </div>
                                                <div className="item-content">
                                                    <div className="comment-info">
                                                        <span className="author-name">
                                                            <span>{subItem.authorName}</span>
                                                            <span className="reply-text">回复</span>
                                                            <span>{subItem.receiveAuthorName}</span>
                                                        </span>
                                                        <span className="comment-time">{subItem.time}</span>
                                                    </div>
                                                    <div className="comment-text">{subItem.text}</div>
                                                    <div className="comment-control">
                                                        <div className="like">
                                                            <i className="iconfont icon-dianzan" />
                                                            <span>{subItem.like}</span>
                                                        </div>
                                                        <CustomAnchor offsetTop={168} anchorId="input-comment">
                                                            <div className="reply" onClick={() => {
                                                                replyComment({
                                                                    name: subItem.authorName,
                                                                    id: subItem.authorId
                                                                })
                                                            }}>
                                                                <i className="iconfont icon-icon_reply" />
                                                                <span>回复</span>
                                                            </div>
                                                        </CustomAnchor>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </WrapperCard>
    )
}

export default UserComment

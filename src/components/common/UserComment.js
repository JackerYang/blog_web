import { Button, Input } from "antd"
import { useEffect, useState } from "react"
import "./UserComment.less"
import WrapperCard from "./WrapperCard"
import { Avatar } from 'antd'

const UserComment = () => {
    const [text, setText] = useState("")
    const [canPublish, setCanPublish] = useState(false)
    const [list, setList] = useState([
        {
            id: 1,
            avatar: "",
            authorName: "哈哈哈",
            time: "2021-02-20 10:45:09",
            text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
            like: 234,
            subComments: [
                {
                    id: 1,
                    avatar: "",
                    authorName: "哈哈哈",
                    receiveAuthorName: "嘿嘿和",
                    time: "2021-02-20 10:45:09",
                    text: "但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话但你们要非说他们在海外非常火的话",
                    like: 234,
                },
                {
                    id: 2,
                    avatar: "",
                    authorName: "哈哈哈",
                    receiveAuthorName: "嘿嘿和",
                    time: "2021-02-20 10:45:09",
                    text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
                    like: 234,
                }
            ]
        },
        {
            id: 2,
            avatar: "",
            authorName: "哈哈哈",
            time: "2021-02-20 10:45:09",
            text: "类似咱们国家的几位顶流，我也没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。类似咱们国家的几位顶流，我也类似咱们国家的几位顶流，我也没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。类似咱们国家的几位顶流，我也没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。没听过他们的歌，他们也应该是很优秀的歌手，但你们要非说他们在海外非常火的话，那我就不同意了。",
            like: 234,
            subComments: []
        },
        {
            id: 3,
            avatar: "",
            authorName: "哈哈哈",
            time: "2021-02-20 10:45:09",
            text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
            like: 234,
            subComments: [
                {
                    id: 1,
                    avatar: "",
                    authorName: "哈哈哈",
                    receiveAuthorName: "嘿嘿和",
                    time: "2021-02-20 10:45:09",
                    text: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
                    like: 234,
                }
            ]
        },
    ])

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

    return (
        <WrapperCard title="评论" iconColor="#ffc53d" iconBackground="#fff6e5" icon="icon-pinglun1">
            <div className="user-comment">
                <div className="publish-comment">
                    <Input.TextArea allowClear onChange={textChange} autoSize={{ minRows: 3, maxRows: 18 }} placeholder="请输入评论" showCount maxLength={999} />
                    <div className="publish-comment-btn">
                        <Button onClick={publish} disabled={!canPublish} type="primary">发布</Button>
                    </div>
                </div>

                <div className="comment-list">
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
                                        <div className="reply">
                                            <i className="iconfont icon-icon_reply" />
                                            <span>回复</span>
                                        </div>
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
                                                        <div className="reply">
                                                            <i className="iconfont icon-icon_reply" />
                                                            <span>回复</span>
                                                        </div>
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

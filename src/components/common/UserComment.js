import { Button, Input } from "antd"
import { useEffect, useState } from "react"
import "./UserComment.less"
import WrapperCard from "./WrapperCard"

const UserComment = () => {
    const [text, setText] = useState("")
    const [canPublish, setCanPublish] = useState(false)

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
        <WrapperCard title="评论" iconColor="#925adb" iconBackground="#faf2ff" icon="icon-pinglun1">
            <div className="user-comment">
                <div className="publish-comment">
                    <Input.TextArea onChange={textChange} autoSize={{
                        minRows: 3,
                        maxRows: 18
                    }} placeholder="请输入评论" showCount maxLength={999} />
                    <div className="publish-comment-btn">
                        <Button onClick={publish} disabled={!canPublish} type="primary">发布</Button>
                    </div>
                </div>

                <div className="comment-list">

                </div>

            </div>
        </WrapperCard>
    )
}

export default UserComment

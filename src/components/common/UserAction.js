import { Tooltip } from "antd"
import "./UserAction.less"

const UserAction = ({ favorites_count, like_count, comment_count }) => {
    return (
        <div className="user-action">
            <Tooltip placement="top" title="收藏">
                <div className="user-action-item">
                    <span className="iconfont icon-shoucang" />
                    <span>{favorites_count}</span>
                </div>
            </Tooltip>
            <Tooltip placement="top" title="点赞">
                <div className="user-action-item">
                    <span className="iconfont icon-dianzan1" />
                    <span>{like_count}</span>
                </div>
            </Tooltip>
            <Tooltip placement="top" title="评论">
                <div className="user-action-item">
                    <span className="iconfont icon-comment-v2" />
                    <span>{comment_count}</span>
                </div>
            </Tooltip>
        </div>
    )
}

export default UserAction

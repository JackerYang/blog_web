import { Tag } from "antd"
import Avatar from "antd/es/avatar/avatar"
import WrapperCard from "../common/WrapperCard"
import "./ArticleList.less"

const ArticleList = ({ icon, title }) => {

    const list = (
        <div>
            <div className="article-item">
                <div className="article-main">
                    <h3 className="article-title">写给 iview 开发者的一封信</h3>
                    <div className="article-tags">
                        <Tag>vue</Tag>
                        <Tag>react</Tag>
                        <Tag>信件</Tag>
                        <Tag>websocket</Tag>
                    </div>
                    <p className="article-desc">
                        vue中有slot插槽,react中可以通过props实现插槽用法
                        比如移动端导航栏,主要分为左中右三部分,我们可以在父组件中将要展示的内容先定义好,通过属性传给子组件,子组件通过props接收相关属性再展示
                    </p>
                    <div className="article-info">
                        <Avatar />
                        <span>Reason 发表于2021-01-19 14:35:43</span>
                    </div>
                    <div className="article-operate">
                        <div className="article-operate-item">
                            <span className="iconfont icon-shoucang" />
                            <span>120</span>
                        </div>
                        <div className="article-operate-item">
                            <span className="iconfont icon-dianzan1" />
                            <span>120</span>
                        </div>
                        <div className="article-operate-item">
                            <span className="iconfont icon-comment-v2" />
                            <span>120</span>
                        </div>
                    </div>
                </div>
                <div className="article-cover">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
    return <WrapperCard icon="icon-md-list" title="推荐文章" node={list} />
}

export default ArticleList

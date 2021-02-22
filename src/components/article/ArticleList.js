import { Image, Skeleton, Tag, Tooltip } from "antd"
import { useHistory } from "react-router-dom"
import UserAction from "../common/UserAction"
import WrapperCard from "../common/WrapperCard"
import "./ArticleList.less"

const ArticleList = ({ icon, title, articles, loading }) => {
    let history = useHistory()

    // 跳转文章详情
    const toArticleDetail = id => {
        history.push(`/article/${id}`)
    }

    return (
        <WrapperCard icon={icon} title={title}>
            {
                loading &&
                Array.from({ length: 2 }).map((v, k) => (
                    <div key={k} className="skeleton">
                        <div className="left">
                            <Skeleton className="title" rows={1} title={{ width: 240 }} paragraph={false} active={true} />
                            <Skeleton className="time" rows={1} title={{ width: 200 }} paragraph={false} active={true} />
                            <div className="tags">
                                <Skeleton rows={1} title={{ width: 60 }} paragraph={false} active={true} />
                                <Skeleton rows={1} title={{ width: 40 }} paragraph={false} active={true} />
                                <Skeleton rows={1} title={{ width: 50 }} paragraph={false} active={true} />
                                <Skeleton rows={1} title={{ width: 70 }} paragraph={false} active={true} />
                            </div>
                            <Skeleton title={false} paragraph={{ rows: 3 }} active={true} />
                            <div className="control">
                                <Skeleton rows={1} title={{ width: 60 }} paragraph={false} active={true} />
                                <Skeleton rows={1} title={{ width: 60 }} paragraph={false} active={true} />
                                <Skeleton rows={1} title={{ width: 60 }} paragraph={false} active={true} />
                            </div>
                        </div>
                        <Skeleton className="right" title={true} active={true} paragraph={false} />
                    </div>
                ))
            }
            {
                articles.map(article => (
                    <div key={article.id} className="article-item">
                        <div className="article-main">
                            <h3 className="article-title" onClick={() => {
                                toArticleDetail(article.id)
                            }}>{article.title}</h3>
                            <div className="article-time">
                                <Tooltip placement="top" title={`发布时间：${article.create_time}`}>
                                    <span className="create-time"><i className="iconfont icon-xiezuojushi" />{article.create_time}</span>
                                </Tooltip>
                                {
                                    article.update_time &&
                                    <Tooltip placement="top" title={`更新时间：${article.update_time}`}>
                                        <span className="update-time"><i className="iconfont icon-gengxin" />{article.update_time}</span>
                                    </Tooltip>
                                }
                            </div>
                            <div className="article-tags">{article.tags.map(tag =>
                                <Tag key={tag.id}>{tag.name}</Tag>)}</div>
                            <p className="article-desc">{article.desc}</p>
                            <UserAction favorites_count={article.favorites_count} like_count={article.like_count} comment_count={article.comment_count} />
                        </div>
                        <div className="article-cover">
                            <Image key={article.id} src={article.poster} />
                        </div>
                    </div>
                ))
            }
        </WrapperCard>
    )
}

export default ArticleList

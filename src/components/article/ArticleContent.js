import { Skeleton } from "antd"
import "./ArticleContent.less"

const ArticleContent = ({ loading, poster, title, html }) => {
    return (
        <div className="article-content">
            <div className="common_card">
                {
                    loading &&
                    <div className="article-content-skeleton">
                        <Skeleton className="poster-skeleton" rows={1} title={true} paragraph={false} active={true} />
                        <div className="text-skeleton">
                            <Skeleton className="title-skeleton" rows={1} title={{ width: 480 }} paragraph={false} active={true} />
                            {
                                Array.from({ length: 4 }).map((v, k) => (
                                    <Skeleton className="html-skeleton" key={k} title={{ width: 240 }} paragraph={{ rows: 4 }} active={true} />
                                ))
                            }
                        </div>
                    </div>
                }
                {
                    !loading &&
                    <div>
                        <img className="poster" draggable={false} src={poster} alt="" />
                        <div className="text">
                            <h2 className="title">{title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ArticleContent

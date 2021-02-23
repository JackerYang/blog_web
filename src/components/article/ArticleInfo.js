import { Col, Row, Skeleton } from "antd"
import CustomAnchor from "../common/CustomAnchor"
import WrapperCard from "../common/WrapperCard"
import "./ArticleInfo.less"

const ArticleInfo = ({ loading, info }) => {
    return (
        <WrapperCard className="article-info" title="统计" iconColor="#76cf49" iconBackground="#eefae1" icon="icon-tongji">
            {
                loading &&
                <div className="article-info-skeleton">
                    {
                        Array.from({ length: 2 }).map((v, k) => (
                            <Row key={k} gutter={[16, 8]}>
                                {
                                    Array.from({ length: 2 }).map((m, n) => (
                                        <Col key={n} span={12}>
                                            <Skeleton className="col-item" rows={1} title={{ width: 120 }} paragraph={false} active={true} />
                                        </Col>
                                    ))
                                }
                            </Row>
                        ))
                    }
                    <div className="items">
                        {
                            Array.from({ length: 3 }).map((v,k) => (
                                <Skeleton.Button key={k} className="item" size="large" shape="circle" active={true} />
                            ))
                        }
                    </div>
                </div>
            }
            {
                !loading &&
                <div className="info-content">
                    <Row gutter={[16, 8]}>
                        <Col span={12}>
                            <span className="create-time">浏览: {info.viewCount}</span>
                        </Col>
                        <Col span={12}>
                            <span className="update-time">字数: {info.wordCount}</span>
                        </Col>
                    </Row>
                    <Row gutter={[16, 8]}>
                        <Col span={12}>
                            <span className="create-time">发布: {info.createTime}</span>
                        </Col>
                        <Col span={12}>
                            <span className="create-time">更新: {info.updateTime}</span>
                        </Col>
                    </Row>
                    <div className="interactive">
                        <div className="item">
                            <span className="icon"><i className="iconfont icon-shoucang" /></span>
                        </div>
                        <div className="item">
                            <span className="icon"><i className="iconfont icon-dianzan1" /></span>
                        </div>
                        <CustomAnchor offsetTop={168} anchorId="input-comment">
                            <div className="item">
                                <span className="icon"><i className="iconfont icon-comment-v2" /></span>
                            </div>
                        </CustomAnchor>

                    </div>
                </div>
            }
        </WrapperCard>
    )
}

export default ArticleInfo

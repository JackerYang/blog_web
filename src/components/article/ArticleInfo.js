import { Col, Row } from "antd"
import CustomAnchor from "../common/CustomAnchor"
import WrapperCard from "../common/WrapperCard"
import "./ArticleInfo.less"

const ArticleInfo = () => {
    return (
        <WrapperCard className="article-info" title="统计" iconColor="#76cf49" iconBackground="#eefae1" icon="icon-tongji">
            <div className="info-content">
                <Row gutter={[16, 8]}>
                    <Col span={12}>
                        <span className="create-time">浏览: 12,354</span>
                    </Col>
                    <Col span={12}>
                        <span className="update-time">字数: 322,134</span>
                    </Col>
                </Row>
                <Row gutter={[16, 8]}>
                    <Col span={12}>
                        <span className="create-time">发布: 2021-02-03</span>
                    </Col>
                    <Col span={12}>
                        <span className="create-time">更新: 2021-02-03</span>
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
        </WrapperCard>
    )
}

export default ArticleInfo

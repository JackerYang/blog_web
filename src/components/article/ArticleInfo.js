import { Col, Row } from "antd"
import WrapperCard from "../common/WrapperCard"
import "./ArticleInfo.less"

const ArticleInfo = () => {
    return (
        <WrapperCard className="article-info" title="统计" iconColor="#76cf49" iconBackground="#eefae1" icon="icon-tongji">
            <div className="info-content">
                <Row gutter={[16, 8]}>
                    <Col span={12}>
                        <span className="create-time"><i className="iconfont icon-icon_liulan-xian" />12，354</span>
                    </Col>
                    <Col span={12}>
                        <span className="update-time"><i className="iconfont icon-zishutongji" />322，134</span>
                    </Col>
                </Row>
                <Row gutter={[16, 8]}>
                    <Col span={12}>
                        <span className="create-time"><i className="iconfont icon-xiezuojushi" />2021-02-03</span>
                    </Col>
                    <Col span={12}>
                        <span className="create-time"><i className="iconfont icon-gengxin" />2021-02-03</span>
                    </Col>
                </Row>
            </div>
        </WrapperCard>
    )
}

export default ArticleInfo

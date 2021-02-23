import { Anchor, Skeleton } from "antd"
import WrapperCard from "../common/WrapperCard"
import "./ArticleAnchor.less"

const { Link } = Anchor

const ArticleAnchor = ({ loading, anchors }) => {

    const clickHandle = (e, link) => {
        e.preventDefault()
    }
    return (
        <WrapperCard title="目录" iconColor="#925adb" iconBackground="#faf2ff" icon="icon-sort">
            <div className="anchor-content">
                {
                    loading &&
                    [150, 170, 190, 210].map(width => (
                        <Skeleton key={width} rows={1} title={{ width }} paragraph={false} active={true} />
                    ))
                }
                <Anchor affix={false} showInkInFixed offsetTop={80} onClick={clickHandle}>
                    {
                        anchors.map(anchor => (
                            <Link key={anchor.id} href={"#" + anchor.id} title={anchor.title} />
                        ))
                    }
                </Anchor>
            </div>
        </WrapperCard>
    )
}

export default ArticleAnchor

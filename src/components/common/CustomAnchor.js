import { Anchor } from "antd"
import "./CustomAnchor.less"

const CustomAnchor = ({ children, offsetTop, anchorId }) => {
    return (
        <div className="custom-anchor">
            <Anchor affix={false} offsetTop={offsetTop} onClick={(e) => {
                e.preventDefault()
            }}>
                <Anchor.Link href={"#" + anchorId} title={children} />
            </Anchor>
        </div>
    )
}

export default CustomAnchor

import { Anchor } from "antd"
import WrapperCard from "../common/WrapperCard"
import "./ArticleAnchor.less"

const { Link } = Anchor

const ArticleAnchor = () => {

    const clickHandle = (e, link) => {
        e.preventDefault()

        setTimeout(() => {
            document.querySelector(link.href).focus()
        }, 500)
        // setTimeout(() => {
        //     document.querySelector(link.href).style.transition = "all .5s"
        //     document.querySelector(link.href).style.background = "#ff0"
        // }, 500)
        // setTimeout(() => {
        //     document.querySelector(link.href).style.background = "#fff"
        // }, 1000)
    }
    return (
        <WrapperCard title="目录" iconColor="#925adb" iconBackground="#faf2ff" icon="icon-sort">
            <div className="anchor-content">
                <Anchor affix={false} showInkInFixed offsetTop={80} onClick={clickHandle}>
                    <Link href="#h-1" title="1111111" />
                    <Link href="#h-2" title="2222222" />
                    <Link href="#h-3" title="3333333" />
                    <Link href="#h-4" title="4444444" />
                </Anchor>
            </div>
        </WrapperCard>
    )
}

export default ArticleAnchor

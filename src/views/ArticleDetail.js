import { Affix } from "antd"
import { useEffect, useState } from "react"
import banner from "../assets/img/banner.png"
import ArticleAnchor from "../components/article/ArticleAnchor"
import ArticleContent from "../components/article/ArticleContent"
import ArticleInfo from "../components/article/ArticleInfo"
import UserComment from "../components/common/UserComment"
import "./ArticleDetail.less"

const ArticleDetail = () => {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState({})
    const [title, setTitle] = useState("")
    const [poster, setPoster] = useState("")
    const [anchors, setAnchors] = useState([])
    const [html, setHtml] = useState("")

    const getData = () => {
        setLoading(true)
        setTimeout(() => {
            setInfo({
                viewCount: "1,234",
                wordCount: "323,454",
                createTime: "2021-01-12",
                updateTime: "2021-02-04"
            })
            setTitle("vue和react中如何优雅地使用")
            setPoster(banner)
            setHtml(
                `<h3 id="h-1">111111</h3>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <h3 id="h-2">222222</h3>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <h3 id="h-3">333333</h3>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <h3 id="h-4">444444</h3>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                        <p>通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>`
            )
            setAnchors([
                {
                    id: "h-1",
                    title: "1111111"
                },
                {
                    id: "h-2",
                    title: "2222222"
                },
                {
                    id: "h-3",
                    title: "3333333"
                },
                {
                    id: "h-4",
                    title: "4444444"
                }
            ])
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="article-detail">
            <div className="content">
                <ArticleContent loading={loading} poster={poster} html={html} title={title} />
                <UserComment />
            </div>
            <div className="side">
                <Affix offsetTop={88}>
                    <ArticleInfo loading={loading} info={info} />
                </Affix>

                <Affix offsetTop={331}>
                    <ArticleAnchor loading={loading} anchors={anchors} />
                </Affix>
            </div>
        </div>
    )
}

export default ArticleDetail

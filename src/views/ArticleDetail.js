import { Affix } from "antd"
import banner from "../assets/img/banner.png"
import ArticleAnchor from "../components/article/ArticleAnchor"
import ArticleInfo from "../components/article/ArticleInfo"
import UserComment from "../components/common/UserComment"
import "./ArticleDetail.less"

const ArticleDetail = () => {
    return (
        <div className="article-detail">
            <div className="content">
                <div className="common_card">
                    <img className="poster" src={banner} alt="" />
                    <div className="text">
                        <h2 className="title">vue和react中如何优雅地使用</h2>

                        <h3 id="h-1">111111</h3>
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
                            token，请求参数携带CancelToken实例，取消的时候调用cancel函数即可。</p>
                    </div>
                </div>
                <UserComment />
            </div>
            <div className="side">
                <Affix offsetTop={88}>
                    <ArticleInfo />
                </Affix>

                <Affix offsetTop={331}>
                    <ArticleAnchor />
                </Affix>
            </div>
        </div>
    )
}

export default ArticleDetail

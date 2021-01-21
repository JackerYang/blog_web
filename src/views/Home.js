import { useState } from "react"
import ArticleList from "../components/article/ArticleList"
import HomeBanner from "../components/home/HomeBanner"
import "./Home.less"

const Home = () => {
    const [articles] = useState([
        {
            id: 1,
            title: "写给 iview 开发者的一封信",
            favorites_count: 123,
            like_count: 456,
            comment_count: 53,
            create_time: "2020-12-09 12:45:32",
            tags: [
                {
                    name: "vue",
                    id: 1
                },
                {
                    name: "react",
                    id: 2
                },
                {
                    name: "信件",
                    id: 3
                },
                {
                    name: "websocket",
                    id: 4
                }
            ],
            desc: "vue中有slot插槽,react中可以通过props实现插槽用法比如移动端导航栏,主要分为左中右三部分,我们可以在父组件中将要展示的内容先定义好,通过属性传给子组件,子组件通过props接收相关属性再展示",
            poster: "https://file.iviewui.com/asd/asd-pro-3.png"
        },
        {
            id: 2,
            title: "写给 iview 开发者的一封信",
            favorites_count: 123,
            like_count: 456,
            comment_count: 53,
            create_time: "2020-12-09 12:45:32",
            update_time: "2021-01-19",
            tags: [
                {
                    name: "vue",
                    id: 1
                },
                {
                    name: "react",
                    id: 2
                },
                {
                    name: "信件",
                    id: 3
                },
                {
                    name: "websocket",
                    id: 4
                }
            ],
            desc: "vue中有slot插槽,react中可以通过props实现插槽用法比如移动端导航栏,主要分为左中右三部分,我们可以在父组件中将要展示的内容先定义好,通过属性传给子组件,子组件通过props接收相关属性再展示",
            poster: "https://file.iviewui.com/asd/asd-pro-3.png"
        },
        {
            id: 3,
            title: "写给 iview 开发者的一封信",
            favorites_count: 123,
            like_count: 456,
            comment_count: 53,
            create_time: "2020-12-09 12:45:32",
            tags: [
                {
                    name: "vue",
                    id: 1
                },
                {
                    name: "react",
                    id: 2
                },
                {
                    name: "信件",
                    id: 3
                },
                {
                    name: "websocket",
                    id: 4
                }
            ],
            desc: "vue中有slot插槽,react中可以通过props实现插槽用法比如移动端导航栏,主要分为左中右三部分,我们可以在父组件中将要展示的内容先定义好,通过属性传给子组件,子组件通过props接收相关属性再展示",
            poster: "https://file.iviewui.com/asd/asd-pro-3.png"
        }
    ])
    return (
        <div className="home">
            <HomeBanner />
            <div className="content">
                <div className="articles">
                    <ArticleList icon="icon-md-list" title="推荐文章" articles={articles} />
                </div>
                <div className="cards">
                </div>
            </div>
        </div>
    )
}

export default Home

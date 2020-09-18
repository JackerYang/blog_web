import "./Home.less"
import ArticleList from "../components/article/ArticleList"

const Home = () => {
    return (
        <div className="Home">
            <div className="articles">
                <ArticleList />
            </div>
            <div className="tags">
                456
            </div>
        </div>
    )
}

export default Home

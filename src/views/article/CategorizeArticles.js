import React from "react"
import ArticleItems from "../../components/article/ArticleItems"
import ArticleTags from "../../components/article/ArticleTags"
import "./CategorizeArticles.less"

export default () => {
    return (
        <div className="categorize-articles">
            <div className="left">
                <ArticleItems />
            </div>
            <div className="right">
                <ArticleTags />
            </div>
        </div>
    )
}
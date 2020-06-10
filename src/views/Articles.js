import React from "react";
import ArticleItems from "../components/common/ArticleItems";
import ArticleTags from "../components/common/ArticleTags";
import "./Articles.less";

export default () => {
    return (
        <div className="articles">
            <div className="articles-left">
                <ArticleItems />
            </div>
            <div className="articles-right">
                <ArticleTags />
            </div>
        </div>
    );
}

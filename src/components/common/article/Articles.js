import React from "react";
import ArticleItems from "./ArticleItems";
import ArticleTags from "./ArticleTags";
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

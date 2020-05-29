import React from "react";
import TheCarousel from "../components/home/TheCarousel";
import ArticleItems from "../components/home/ArticleItems";
import "./Home.less";

export default () => {

    return (
        <div className="home">
            <TheCarousel />
            <ArticleItems />
        </div>
    );
}

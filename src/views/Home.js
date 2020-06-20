import React from "react";
import HomeCarousel from "../components/home/HomeCarousel";
import Articles from "../components/common/article/Articles";
import "./Home.less";

export default () => {
    return (
        <div className="home">
            <HomeCarousel />
            <Articles />
        </div>
    );
}

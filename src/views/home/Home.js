import React from "react"
import HomeCarousel from "../../components/home/HomeCarousel"
import CategorizeArticles from "../article/CategorizeArticles"
import "./Home.less"

export default () => {
    return (
        <div className="home">
            <HomeCarousel />
            <CategorizeArticles />
        </div>
    )
}

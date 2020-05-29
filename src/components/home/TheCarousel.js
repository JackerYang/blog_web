import React, { useState } from "react";
import { Button, Carousel, Switch } from "antd";

export default () => {

    let [items] = useState([
        {
            id: 1,
            title: "寒冷的冬天",
            imgUrl: require("../../assets/img/carousel1.jpg")
        },
        {
            id: 2,
            title: "炎热的夏天",
            imgUrl: require("../../assets/img/carousel2.jpg")
        }
    ]);

    let [autoCarousel, setAutoCarousel] = useState(true);

    const changeAutoCarousel = val => {
        setAutoCarousel(val);
    };

    return (
        <div className="home-carousel">
            <div className="header">
                <div className="left">
                    <span>猜你喜欢</span>
                </div>
                <div className="right">
                    <Switch defaultChecked onChange={changeAutoCarousel} />
                    <span>自动播放</span>
                </div>
            </div>
            <Carousel autoplay={autoCarousel}>
                {items.map(item => (
                    <div className="item-wrapper" key={item.id}>
                        <div className="item" style={{ backgroundImage: `url(${item.imgUrl})` }}>
                            <div className="title">{item.title}</div>
                            <Button danger size="large" type="primary" shape="round">开始阅读</Button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

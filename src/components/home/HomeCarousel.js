import React, { useState } from "react";
import { Button, Carousel } from "antd";
import ModuleTitle from "../common/ModuleTitle";

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


    return (
        <div className="home-carousel">
            <ModuleTitle value="猜你喜欢" />
            <Carousel autoplay>
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

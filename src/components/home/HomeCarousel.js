import React, { useState } from "react";
import { Button, Carousel } from "antd";
import ModuleTitle from "../common/ModuleTitle";

export default () => {

    let [items] = useState([
        {
            id: 1,
            title: "寒冷的冬天",
            imgUrl: "https://10wallpaper.com/wallpaper/1920x1080/1411/blue_reflections-Abstract_widescreen_wallpaper_1920x1080.jpg"
        },
        {
            id: 2,
            title: "炎热的夏天",
            imgUrl: "https://pic.rmb.bdstatic.com/86c94af0afe1ea2023448d11f24df2a5.jpeg"
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

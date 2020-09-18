import { Avatar, Menu } from "antd"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./MainHeader.less"

const MainHeader = () => {
    let history = useHistory()

    // 导航路由
    const [navs] = useState([
        {
            title: "首页",
            path: "/"
        },
        {
            title: "文章",
            path: "/article"
        },
        {
            title: "话题",
            path: "/topic"
        }
    ])
    // 当前选中路由
    const [current, setCurrent] = useState(history.location.pathname)

    // 点击导航栏
    const handleClick = item => {
        history.push(item.key)
        setCurrent(item.key)
    }

    return (
        <div className="MainHeader">
            <div className="MainHeader-container">
                <div className="logo-navs">
                    <div className="logo">
                        Admin Pro
                    </div>
                    <div className="navs">
                        <Menu onSelect={handleClick} selectedKeys={[current]} mode="horizontal">
                            {navs.map(nav => (
                                <Menu.Item key={nav.path}>{nav.title}</Menu.Item>
                            ))}
                        </Menu>
                    </div>
                </div>
                <div className="msg-user">
                    <span className="msg iconfont icon-bell" />
                    <div className="user">
                        <Avatar />
                        <span>username</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader

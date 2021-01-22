import { Avatar, Dropdown, Menu } from "antd"
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
        }
    ])
    // 当前选中路由
    const [current, setCurrent] = useState(history.location.pathname)

    // 点击导航栏
    const clickNav = item => {
        if (history.location.pathname !== item.key) {
            history.push(item.key)
            setCurrent(item.key)
        }
    }

    // 点击用户菜单
    const clickUserMenu = item => {
        switch (item.key) {
            case "personal":
                // 个人中心
                break
            case "setting":
                // 系统设置
                break
            case "exit":
                // 退出登录
                break
            default:
                break
        }
    }

    // 用户下拉菜单
    const userMenus = [
        {
            icon: "icon-gerenzhongxin",
            name: "个人中心",
            key: "personal"
        },
        {
            icon: "icon-setting",
            name: "系统设置",
            key: "setting"
        },
        {
            icon: "icon-tuichu",
            name: "退出登录",
            key: "exit"
        }
    ]
    const userMenu = (
        <Menu onClick={clickUserMenu}>
            {
                userMenus.map(menu => (
                    <Menu.Item key={menu.key}>
                        <i className={`iconfont ${menu.icon}`} /> {menu.name}
                    </Menu.Item>
                ))
            }
        </Menu>
    )

    return (
        <div className="main-header">
            <div className="main-header-container">
                <div className="logo-navs">
                    <div className="logo">
                        Admin Pro
                    </div>
                    <div className="navs">
                        <Menu onClick={clickNav} selectedKeys={[current]} mode="horizontal">
                            {navs.map(nav => (
                                <Menu.Item key={nav.path}>{nav.title}</Menu.Item>
                            ))}
                        </Menu>
                    </div>
                </div>
                <div className="msg-user">
                    <span className="msg iconfont icon-bell" />
                    <Dropdown overlay={userMenu} placement="bottomCenter" arrow>
                        <div className="user">
                            <Avatar />
                            <span>username</span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default MainHeader

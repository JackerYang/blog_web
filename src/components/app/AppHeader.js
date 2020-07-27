import React, { useState } from "react";
import Icon, {
    HomeOutlined,
    LoginOutlined,
    MenuOutlined,
    MessageOutlined,
    UsergroupAddOutlined
} from "@ant-design/icons";
import { Button, Drawer, Tooltip } from "antd";
import ModalLogin from "../login/ModalLogin";
import { useHistory } from "react-router-dom";
import "./AppHeader.less";
import WaterWave from "../effect/WaterWave";

export default () => {
    let history = useHistory();

    let [drawerVisible, setDrawerVisible] = useState(false);

    // 导航栏数据
    const navs = [
        {
            title: "首页",
            path: "/",
            name: "home",
            icon: HomeOutlined
        },
        {
            title: "留言",
            path: "/guestbook",
            name: "guestbook",
            icon: MessageOutlined
        },
        {
            title: "友邻",
            path: "/links",
            name: "links",
            icon: UsergroupAddOutlined
        }
    ];

    // 点击跳转路由
    const clickHandler = (nav, closeDrawer = false) => {
        if (history.location.pathname !== nav.path) {
            history.push(nav.path);
            closeDrawer && drawerClose();
        }
    };

    // 打开抽屉
    const drawerOpen = () => {
        setDrawerVisible(true);
    };
    // 关闭抽屉
    const drawerClose = () => {
        setDrawerVisible(false);
    };

    return (
        <header className="app-header">
            <div className="app-header-content">
                <h1 className="title">
                    <WaterWave color="#f00" />
                    NickYang
                </h1>
                {/*大屏幕*/}
                <ul className="navs">
                    {
                        navs.map(nav => (
                            <li className="nav" onClick={() => {
                                clickHandler(nav);
                            }} key={nav.name}>
                                <WaterWave color="#000" />
                                {nav.title}
                            </li>
                        ))
                    }
                </ul>
                <div className="login">
                    <ModalLogin>
                        <Tooltip title="登录">
                            <LoginOutlined />
                        </Tooltip>
                    </ModalLogin>
                </div>

                {/*小屏幕*/}
                <div className="drawer">
                    <MenuOutlined onClick={drawerOpen} />
                    <Drawer
                        placement="left"
                        closable={false}
                        onClose={drawerClose}
                        visible={drawerVisible}
                        className="app-header-drawer"
                    >
                        <header className="drawer-header">
                            <img className="avatar" src="https://i.loli.net/2019/12/11/pHTANBW5oPLlgej.jpg"
                                 alt="avatar" />
                            <h2 className="name">NickYang</h2>
                        </header>
                        <div className="drawer-container">
                            {
                                navs.map(nav => (
                                    <li className="drawer-container-nav" onClick={() => {
                                        clickHandler(nav, true);
                                    }}
                                        key={nav.name}>
                                        <Icon component={nav.icon} />
                                        <span className="title">{nav.title}</span>
                                    </li>
                                ))
                            }
                        </div>
                        <div className="drawer-login">
                            <Button type="primary" block>登录</Button>
                        </div>
                    </Drawer>
                </div>
            </div>
        </header>
    );
}

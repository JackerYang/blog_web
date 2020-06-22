import React, { useState } from "react";
import ModuleTitle from "../components/common/ModuleTitle";
import "./FriendLink.less";

export default () => {

    let [links] = useState([
        {
            id: 1,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }, {
            id: 2,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }, {
            id: 3,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }, {
            id: 4,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }, {
            id: 5,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }, {
            id: 6,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }, {
            id: 7,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }, {
            id: 8,
            avatar: "https://www.beihaiting.com/uploads/allimg/150414/10723-150414221435X2.jpg",
            name: "NickYang",
            remark: "锤子锤子锤子锤子锤子锤子锤子锤子锤子",
            url: "https://www.baidu.com"
        }
    ]);

    return (
        <div className="friend-link">
            <ModuleTitle value="友邻" />
            <div className="rule">
                <div className="label">规则</div>
                <div className="rule-content">
                    <p className="mail">
                        如果要和本站交换友链，请按照以下格式发送到 <a href="mailto:962338970@qq.com">962338970@qq.com</a>
                    </p>
                    <div className="require">
                        <p>博客名字: NickYang</p>
                        <p>博客地址: https://www.nickyang.com</p>
                        <p>博客简介: 简介你个锤子</p>
                        <p>博客头像: https://tc.yevpt.com/images/2020/06/15/vpt-avatar-img-7.md.png</p>
                    </div>
                    <p className="line" />
                    <div className="remark">
                        <p>注① : 希望你的网站以技术为主，且每一个月至少有一次更新。</p>
                        <p>注② : 为了更快的效率，请提前加上我的友链，我会在一天内尽快给出答复，谢谢！</p>
                        <p>2020-06-22</p>
                    </div>
                </div>
            </div>
            <div className="links">
                <div className="label">好友（添加时间排序）</div>
                <div className="link-items">
                    {
                        links.map(link => (
                            <a key={link.id} href={link.url} className="link-item">
                                <img src={link.avatar} alt={link.name} />
                                <div className="info">
                                    <p className="name">{link.name}</p>
                                    <p className="remark">{link.remark}</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

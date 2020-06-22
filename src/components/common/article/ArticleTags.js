import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Skeleton } from "antd";
import ModuleTitle from "../ModuleTitle";
import Icon, {
    AlipayOutlined,
    GithubOutlined,
    GoogleOutlined,
    Html5Outlined,
    QqOutlined,
    ZhihuOutlined
} from "@ant-design/icons";
import "./ArticleTags.less";

export default () => {
    let history = useHistory();

    const [tags, setTags] = useState([]);
    const [tagsLoading, setTagsLoading] = useState(true);

    const clickHandler = id => {
        if (history.location.pathname !== `/tag/${id}`) {
            history.push(`/tag/${id}`);
        }
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            setTags([
                {
                    id: 1,
                    label: "html",
                    number: 10,
                    icon: Html5Outlined
                },
                {
                    id: 2,
                    label: "知乎",
                    number: 3,
                    icon: ZhihuOutlined
                },
                {
                    id: 3,
                    label: "Github",
                    number: 8,
                    icon: GithubOutlined
                },
                {
                    id: 4,
                    label: "qq",
                    number: 6,
                    icon: QqOutlined
                },
                {
                    id: 5,
                    label: "Google",
                    number: 78,
                    icon: GoogleOutlined
                },
                {
                    id: 6,
                    label: "支付宝",
                    number: 46,
                    icon: AlipayOutlined
                }
            ]);
            setTagsLoading(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="article-tags">
            <ModuleTitle value="全部标签" />
            <div className="item-wrapper">
                <Skeleton paragraph={{ rows: 4 }} title={false} active={true} loading={tagsLoading} />
                {
                    tags.map(tag => (
                        <li onClick={() => {
                            clickHandler(tag.id);
                        }} className="item" key={tag.id}>
                            <Icon component={tag.icon} />
                            <span className="label">{tag.label}</span>
                            <span>[ {tag.number} ]</span>
                        </li>
                    ))
                }
            </div>
        </div>
    );
}

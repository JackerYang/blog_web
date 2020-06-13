import React, { useRef } from "react";
import MarkdownEditor from "../markdown/MarkdownEditor";
import { Button } from "antd";
import "./CommentPost.less";

export default ({ addComment }) => {

    const mdRef = useRef(null);

    const postComment = () => {
        let mdValue = mdRef?.current?.getMdValue();
        addComment(mdValue);
    };

    return (
        <div className="comment-post">
            <MarkdownEditor mdRef={mdRef} />
            <div className="post-or-login">
                <Button type="primary" size="small" onClick={postComment}>发表</Button>
                {/*<Button type="primary" size="small" danger>请先登录</Button>*/}
            </div>
        </div>
    );
}

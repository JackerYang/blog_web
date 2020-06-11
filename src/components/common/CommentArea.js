import React, { useRef } from "react";
import MarkdownEditor from "../markdown/MarkdownEditor";
import { Button } from "antd";

export default () => {

    const mdRef = useRef(null);

    const postComment = () => {
        let mdValue = mdRef?.current?.getMdValue();
        console.log(mdValue);
    };

    return (
        <div className="comment-area">
            <MarkdownEditor mdRef={mdRef} />
            <Button onClick={postComment}>发表</Button>
        </div>
    );
}

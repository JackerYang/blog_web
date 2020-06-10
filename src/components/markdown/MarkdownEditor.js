import React from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownRender from "./MarkdownRender";

export default ({ getText, text = "" }) => {

    const handleEditorChange = ({ text }) => {
        getText(text);
    };

    return (
        <MdEditor
            placeholder="请输入评论..."
            value={text}
            style={{ height: "500px" }}
            renderHTML={_text => <MarkdownRender content={_text} />}
            onChange={handleEditorChange}
        />
    );
}

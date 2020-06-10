import React from "react";
import MarkdownEditor from "../markdown/MarkdownEditor";

export default () => {

    const getMarkdownText = text => {
        console.log(text);
    };

    return (
        <div className="comment-area">
            <MarkdownEditor getText={getMarkdownText} />
        </div>
    );
}

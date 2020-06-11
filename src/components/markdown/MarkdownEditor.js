import React, { useImperativeHandle, useState } from "react";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Render from "./MarkdownRender";

MdEditor.use(Plugins.AutoResize, {
    min: 120, // 最小高度
    max: 500 // 最大高度
});

export default ({ mdRef }) => {

    let [mdEditor, setMdEditor] = useState(null);

    useImperativeHandle(mdRef, () => ({
        getMdValue: () => mdEditor?.getMdValue()
    }));

    return (
        <MdEditor
            ref={el => setMdEditor(el)}
            placeholder="请输入评论..."
            plugins={["fonts", "link", "mode-toggle", "full-screen", "auto-resize"]}
            config={{
                view: {
                    menu: true,
                    md: true,
                    html: false
                }
            }}
            renderHTML={text => Render(text)}
        />
    );
}

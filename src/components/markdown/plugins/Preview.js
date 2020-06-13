import React, { useState } from "react";

const Preview = ({ editor }) => {
    const editMode = {
        id: 0,
        iconClass: "rmel-iconfont rmel-icon-keyboard",
        iconTitle: "显示编辑器"
    };

    const previewMode = {
        id: 1,
        iconClass: "rmel-iconfont rmel-icon-visibility",
        iconTitle: "显示预览"
    };

    const [mode, setMode] = useState(previewMode);

    const handleClick = id => {
        editor.setView({
            menu: true,
            md: !id,
            html: !!id
        });
        id ? setMode(editMode) : setMode(previewMode);
    };

    return (
        <span
            className="button button-type-mode"
            title={mode.iconTitle}
            onClick={() => {
                handleClick(mode.id);
            }}
        >
            <i className={mode.iconClass} />
        </span>
    );
};

Preview.align = "right";
Preview.pluginName = "preview";

export default Preview;

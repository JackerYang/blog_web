import React from "react";
import "./ModuleTitle.less";

export default ({ value }) => {
    return (
        <div className="module-title">
            <div className="left">
                {value}
            </div>
        </div>
    );
}

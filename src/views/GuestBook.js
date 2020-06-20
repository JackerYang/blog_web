import React from "react";
import ModuleTitle from "../components/common/ModuleTitle";
import CommentPost from "../components/common/comment/CommentPost";
import CommentArea from "../components/common/comment/CommentArea";
import "./GuestBook.less";

export default () => {
    const addComment = commentContent => {
        console.log(commentContent);
    };

    return (
        <div className="guest-book">
            <ModuleTitle value="留言" />
            <div className="comment">
                <CommentPost addComment={addComment} />
            </div>
            <ModuleTitle value="留言区" />
            <div className="view">
                <CommentArea />
            </div>
        </div>
    );
}

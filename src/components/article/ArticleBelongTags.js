import React from "react"
import { Tag } from "antd"
import { useHistory } from "react-router-dom"
import "./ArticleBelongTags.less"

export default ({ categories = [] }) => {
    let history = useHistory()

    const clickHandler = id => {
        if (history.location.pathname !== `/tag/${id}`) {
            history.push(`/tag/${id}`)
        }
    }

    return (
        <div className="article-belong-tags">
            {
                categories.map(category => (
                    <Tag key={category.id} onClick={() => {
                        clickHandler(category.id)
                    }} color="green">{category.name}</Tag>
                ))
            }
        </div>
    )
}

import { Button } from "antd"
import { useEffect, useState } from "react"
import WrapperCard from "../common/WrapperCard"
import "./ArticleTags.less"

const ArticleTags = ({ selectTag }) => {
    const [tags, setTags] = useState([])
    const [tagId, setTagId] = useState(null)
    // 获取标签数据
    const getData = () => {
        setTags([
            {
                name: "vue",
                count: 12,
                id: 1
            },
            {
                name: "welcome",
                count: 12,
                id: 2
            },
            {
                name: "js",
                count: 1,
                id: 3
            },
            {
                name: "webpack",
                count: 12,
                id: 4
            },
            {
                name: "react",
                count: 22,
                id: 5
            },
            {
                name: "html",
                count: 0,
                id: 6
            },
            {
                name: "css",
                count: 1,
                id: 7
            }
        ])
    }
    // 点击标签
    const clickTag = id => {
        if (id === tagId) {
            setTagId(null)
            selectTag(null)
        } else {
            setTagId(id)
            selectTag(id)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <WrapperCard icon="icon-biaoqian1" iconColor="#ffc53d" iconBackground="#fff6e5" title="文章标签">
            <div className="tags-content">
                {
                    tags.map(tag => (
                        <Button onClick={() => {
                            clickTag(tag.id)
                        }} key={tag.id} type={tag.id === tagId ? "primary" : ""} size="small" className="tag">
                            {tag.name} [{tag.count}]
                        </Button>
                    ))
                }
            </div>
        </WrapperCard>
    )
}

export default ArticleTags

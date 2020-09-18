import "./WrapperCard.less"

const WrapperCard = ({ icon, title, node }) => {
    return (
        <div className="wrapper-card">
            <div className="wrapper-card-title">
                <span className={`iconfont ${icon}`} />
                <span className="title">{title}</span>
            </div>
            <div className="wrapper-card-content">
                {node}
            </div>
        </div>
    )
}

export default WrapperCard

import "./WrapperCard.less"

const WrapperCard = ({ icon, title, children, iconColor, iconBackground }) => {
    return (
        <div className="wrapper-card">
            <div className="wrapper-card-title">
                <span className={`iconfont ${icon}`} style={{ color: iconColor, background: iconBackground }} />
                <span className="title">{title}</span>
            </div>
            <div className="wrapper-card-content">
                {children}
            </div>
        </div>
    )
}

export default WrapperCard

import "./Description.css"

export default function Description ( {title, description }) {
    return (
        <div className="descContainer">
            <h1 className="titleStyle">{title}</h1>
            <p className="descStyle">{description}</p>
        </div>
    )
}
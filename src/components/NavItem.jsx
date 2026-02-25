import "./NavItem.css"

export default function NavItem ( {source, text, navigate, location} ) {
    return (
        <div className="navitem-container" onClick={() => navigate(location)}>
            <img className="img-size" src={source}></img>
            <p className="text-style">{text}</p>
        </div>
    )
}
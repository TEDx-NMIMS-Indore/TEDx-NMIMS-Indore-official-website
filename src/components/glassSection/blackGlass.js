import "./blackGlass.scss"
export default function BlackGlass(props) {
    return (
        <div className="blackGlass">
            <div className="blackGlassHeading">
                <h1>{props.heading ? props.showHeading : ""}</h1>
            </div>
            <div className="blackGlassContent">{props.content}</div>
        </div>
    );
}

import "./glass.scss"

export default function Glass(props) {
    return (
        <div className="glass">
            <div className="glassHeading">
                <h1>{props.heading}</h1>
            </div>
            <div className="glassContent">{props.content}</div>
        </div>
    );
}
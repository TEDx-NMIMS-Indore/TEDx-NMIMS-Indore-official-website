import "./descComp.scss";
import TEDxLogo from "../TEDxLogo/TEDxLogo";

export default function DescComp(props) {
    if (props.theme == "white") {
        if (props.headingRequired) {
            return (
                <div className="darkThemeMasterDiv">
                    {/* <h1 className="heading">{props.heading}</h1> */}
                    <TEDxLogo />
                    <div className="content">{props.content}</div>
                </div>
            );
        } else {
            return (
                <div className="darkThemeMasterDiv">
                    <div className="content">{props.content}</div>
                </div>
            );
        }
    } else if (props.theme == "light") {
        if (props.headingRequired) {
            return (
                <div className="lightThemeMasterDiv">
                    <h1 className="heading">{props.heading}</h1>
                    <div className="content">{props.content}</div>
                </div>
            );
        } else {
            return (
                <div className="lightThemeMasterDiv">
                    <div className="content">{props.content}</div>
                </div>
            );
        }
    }
}

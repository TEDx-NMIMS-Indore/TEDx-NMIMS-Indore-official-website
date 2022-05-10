import "./gradientHeading.scss";

export default function GradientHeading(props) { 
    return (
        <div className = "gradientHeading">
            {props.heading}
        </div>
    )
}
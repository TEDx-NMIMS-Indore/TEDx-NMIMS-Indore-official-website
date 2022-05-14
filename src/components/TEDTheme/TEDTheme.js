import "./TEDTheme.scss";
import data from "../../masterData.json";
import { Button } from "antd";

export default function ThemeComponent() {
    return (
        <div className="themeBackground">
            <img src="images/Theme.png" className="themeTitleImage" />
            <p>{data.theme.description}</p>
            <a href={data.theme.link} target="_blank">
                <Button type="primary" className="moreButton" size="large">
                    Watch
                </Button>
            </a>
        </div>
    );
}

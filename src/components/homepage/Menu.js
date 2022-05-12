import { Menu } from "antd";
import "./Menu.scss";
import {
    MailOutlined,
    AppstoreOutlined,
    TeamOutlined,
    HomeOutlined,
    FileImageFilled,
    InfoCircleFilled,
} from "@ant-design/icons";
import data from "../../masterData.json";

export default function MenuItem() {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <a href="/">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
            </a>
            <Menu.SubMenu key="about" title="About" icon={<InfoCircleFilled />}>
                <a href="/aboutTED">
                    <Menu.Item key="aboutTed" icon={<AppstoreOutlined />}>
                        Ted
                    </Menu.Item>
                </a>
                <a href="/aboutNMIMS">
                    <Menu.Item key="aboutNMIMS" icon={<AppstoreOutlined />}>
                        NMIMS
                    </Menu.Item>
                </a>
                <a href="/aboutTEDxNMIMS">
                    <Menu.Item key="aboutTedxNMIMS" icon={<AppstoreOutlined />}>
                        TEDxNMIMS
                    </Menu.Item>
                </a>
                <Menu.Item key="aboutTeam" icon={<TeamOutlined />}>
                    Meet the team
                </Menu.Item>
                <Menu.Item key="aboutPhotos" icon={<FileImageFilled />}>
                    Photos
                </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu
                key="speakers"
                icon={<TeamOutlined />}
                title="Speakers"
            >
                <Menu.Item icon={<TeamOutlined />}>Speakers 2022</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="talks" icon={<MailOutlined />} title="Talks">
                <Menu.Item icon={<AppstoreOutlined />}>Talks 2022</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
                key="sponsors"
                icon={<MailOutlined />}
                title="Sponsors"
            >
                <Menu.Item icon={<AppstoreOutlined />}>Sponsors 2022</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="three" icon={<MailOutlined />} title="Contact">
                <a href="/contact">
                    <Menu.Item icon={<AppstoreOutlined />}>All</Menu.Item>
                </a>
                <a href={"mailto:" + data.tedexNMIMSContactDetails.mail.link}>
                    <Menu.Item icon={<AppstoreOutlined />}>Mail</Menu.Item>
                </a>
                <a
                    href={data.tedexNMIMSContactDetails.instagram.link}
                    target="_blank"
                >
                    <Menu.Item icon={<AppstoreOutlined />}>Instagram</Menu.Item>
                </a>
                <a
                    href={data.tedexNMIMSContactDetails.linkedin.link}
                    target="_blank"
                >
                    <Menu.Item icon={<AppstoreOutlined />}>Linkedin</Menu.Item>
                </a>
                <Menu.Item icon={<AppstoreOutlined />}>Youtube</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
}

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

export default function MenuItem() {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.SubMenu key="about" title="About" icon={<InfoCircleFilled />}>
                <Menu.Item key="aboutTed" icon={<AppstoreOutlined />}>
                    Ted
                </Menu.Item>
                <Menu.Item key="aboutNMIMS" icon={<AppstoreOutlined />}>
                    NMIMS
                </Menu.Item>
                <Menu.Item key="aboutTedxNMIMS" icon={<AppstoreOutlined />}>
                    TEDxNMIMS
                </Menu.Item>
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
                <Menu.Item icon={<AppstoreOutlined />}>Mail</Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />}>Instagram</Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />}>Linkedin</Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />}>Youtube</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
}

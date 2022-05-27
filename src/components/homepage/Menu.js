import { Menu } from "antd";
import "./Menu.scss";
import {
    MailOutlined,
    AppstoreOutlined,
    TeamOutlined,
    HomeOutlined,
    FileImageOutlined,
    InfoCircleOutlined,
    BankOutlined,
    SoundOutlined,
    DollarCircleOutlined,
    ContactsOutlined,
} from "@ant-design/icons";
import data from "../../masterData.json";
import React from "react";

const items = [
    {
        label: <a href="/">Home</a>,
        key: "mainHomepage",
        icon: <HomeOutlined />,
    },
    {
        label: <a href="">About</a>,
        key: "about",
        icon: <InfoCircleOutlined />,
    },
    {
        label: <a href="team">Team</a>,
        key: "aboutTEDxTeam",
        icon: <TeamOutlined />,
    },
    {
        label: "Speakers",
        key: "speakers",
        icon: <SoundOutlined />,
        children: [
            {
                label: <a href="/speakers2022">Speakers 2022</a>,
                key: "speakers2022",
                icon: <SoundOutlined />,
            },
            {
                label: <a href="/speakers2019">Speakers 2019</a>,
                key: "speakers2019",
                icon: <SoundOutlined />,
            },
        ],
    },
    {
        label: <a href="contact">Contacts</a>,
        key: "contact",
        icon: <ContactsOutlined />,
    },
];

export default function MenuItem() {
    const [current, setCurrent] = React.useState("mail");

    const onClick = (e) => {
        setCurrent(e.key);
        alert(e.key)
    };

    return (
        <div className="logoAdj">
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items} 
            />
        </div>
    );
}

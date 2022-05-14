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
        label: "About",
        key: "about",
        icon: <InfoCircleOutlined />,
        children: [
            {
                label: <a href="aboutNMIMS">About NMIMS</a>,
                key: "aboutNMIMS",
                icon: <BankOutlined />,
            },
            {
                label: <a href="aboutTED">About TED talks</a>,
                key: "aboutTED",
                icon: <SoundOutlined />,
            },
            {
                label: <a href="aboutTEDxNMIMS">About TEDxNMIMS</a>,
                key: "aboutTEDxNMIMS",
                icon: <SoundOutlined />,
            },
            {
                label: "About team",
                key: "aboutTEDxTeam",
                icon: <TeamOutlined />,
            },
            {
                label: "About events",
                key: "aboutTEDxEvents",
                icon: <FileImageOutlined />,
            },
        ],
    },
    {
        label: "Sponsors",
        key: "sponsors",
        icon: <DollarCircleOutlined />,
        children: [
            {
                label: <a href="/sponsors">Sponsors 2022</a>,
                key: "sponsor2022",
                icon: <DollarCircleOutlined />,
            },
        ],
    },
    {
        label: <a href="contact">Contact</a>,
        key: "contact",
        icon: <ContactsOutlined />,
    },
];

export default function MenuItem() {
    const [current, setCurrent] = React.useState("mail");

    const onClick = (e) => {
        console.log("click ", e.key);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} 
            theme="dark"
        />
    );
}

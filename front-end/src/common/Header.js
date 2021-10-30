import React from 'react'
import "./Header.css"
import logo from "../assests/logo.png";
import global from "../assests/global.png";
import { Link } from "react-router-dom";
const navbarItems = [
    {
        displayName: 'Nhà đất bán',
        link: '',
        dropDownItems: [
            {
                displayName: 'Nhà chung cư',
                link: '',
            },
            {
                displayName: 'Nhà riêng',
                link: '',
            },
            {
                displayName: 'Nhà mặt phố',
                link: '',
            },
        ]
    },
    {
        displayName: 'Nhà đất cho thuê',
        link: '',
        dropDownItems: [
            {
                displayName: 'Nhà chung cư cho thuê',
                link: '',
            },
            {
                displayName: 'Nhà riêng cho thuê',
                link: '',
            },
            {
                displayName: 'Nhà mặt phố cho thuê',
                link: '',
            },
        ]
    },
    {
        displayName: 'Phòng họp',
        link: '',
        dropDownItems: [],
    },
    {
        displayName: 'Tin tức',
        link: '',
        dropDownItems: [],
    },
    {
        displayName: 'Thông tin',
        link: '',
        dropDownItems: [],
    },
    {
        displayName: 'Liên hệ',
        link: '',
        dropDownItems: [],
    },
]

export default function Header() {
    return (
        <div className="header-container">
            <ul className="header-col">
                <li className="logo-container">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="logo-header" />
                    </Link>
                </li>
                {
                    navbarItems.map((item) => {
                        return (
                            <li className="header-navbar">
                                <Link to={item.link} className="navbar-link">{item.displayName}</Link>
                                <div className="header-line-hover"></div>
                                <ul className="navbar-hover-list">
                                    {
                                        item.dropDownItems.map((item) => {
                                            return (
                                                <li>
                                                    <Link to={item.link}>{item.displayName}</Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
            <ul className="header-col">
                <li>
                    <Link to="">
                        <img src={global} alt="global" />
                    </Link>
                </li>
                <li className="header-navbar login">
                    <Link to="/login" className="navbar-link">Đăng nhập</Link>
                </li>
                <li>
                    <Link to="/register" className="register">Đăng kí</Link>
                </li>
            </ul >
        </div >
    )
}

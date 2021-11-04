import React from 'react'
import "./Header.css"
import logo from "../assets/logo.png";
import global from "../assets/global.png";
import { Link } from "react-router-dom";
const navbarItems = [
    {
        displayName: 'Nhà đất bán',
        link: '',
        dropDownItems: [
            {
                displayName: 'Bán căn hộ chung cư',
                link: '',
            },
            {
                displayName: 'Bán nhà riêng, nhà mặt phố',
                link: '',
            },
            {
                displayName: 'Bán biệt thự, nhà liền kề',
                link: '',
            },
            {
                displayName: 'Bán đất nền',
                link: '',
            },
            {
                displayName: 'Bán đất thổ cư',
                link: '',
            },
            {
                displayName: 'Bán tòa nhà văn phòng',
                link: '',
            },
            {
                displayName: 'Bán căn hộ CONDOTEL',
                link: '',
            },
            {
                displayName: 'Bán đất trang trại, nghỉ dưỡng',
                link: '',
            },
            {
                displayName: 'Bán kho, nhà xưởng, kiot',
                link: '',
            },
            {
                displayName: 'Bán nhà đất khác',
                link: '',
            },
        ]
    },
    {
        displayName: 'Nhà đất cho thuê',
        link: '',
        dropDownItems: [
            {
                displayName: 'Cho thuê căn hộ chung cư',
                link: '',
            },
            {
                displayName: 'Cho thuê phòng trọ, nhà trọ',
                link: '',
            },
            {
                displayName: 'Cho thuê văn phòng',
                link: '',
            },
            {
                displayName: 'Cho thuê nhà riêng, nhà mặt phố',
                link: '',
            },
            {
                displayName: 'Cho thuê căn hộ CONDOTEL',
                link: '',
            },
            {
                displayName: 'Cho thuê căn hộ OFICETEL',
                link: '',
            },
            {
                displayName: 'Cho thuê cửa hàng, kiot',
                link: '',
            },
            {
                displayName: 'Cho thuê kho, nhà xưởng',
                link: '',
            },
            {
                displayName: 'Cho thuê nhà đất khác',
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
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo-header" />
                    </Link>
                </li>
                {
                    navbarItems.map((item, index) => {
                        return (
                            <li className="header-navbar" key={index}>
                                <Link to={item.link} className="navbar-link">{item.displayName}</Link>
                                <div className="header-line-hover"></div>
                                <ul className="navbar-hover-list">
                                    {
                                        item.dropDownItems.map((item, index) => {
                                            return (
                                                <li key={index}>
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
                <li >
                    <Link to="/login" className="login">Đăng nhập</Link>
                </li>
                <li>
                    <Link to="/register" className="register">Đăng kí</Link>
                </li>
            </ul >
        </div >
    )
}

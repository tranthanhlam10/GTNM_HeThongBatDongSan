import React from 'react'
import './SearchingList.css'
import SearchBar from '../../common/SearchBar/SearchBar'
import Card from './Card'
import SortedBy from './SortedBy'
import FilterBlock from './FilterBlock'
import HotLocation from './HotLocation'
import NewProject from './NewProject'
const filterList = [
    {
        filterTitle: 'TÌM THEO KHOẢNG GIÁ',
        filterItems: [
            {
                displayName: 'Dưới 1 triệu',
                link: '',
            },
            {
                displayName: '1 -> 3 triệu',
                link: '',
            },
            {
                displayName: '3 -> 5 triệu',
                link: '',
            },
            {
                displayName: '5 -> 10 triệu',
                link: '',
            },
            {
                displayName: '10 -> 40 triệu',
                link: '',
            },
            {
                displayName: '40 -> 70 triệu',
                link: '',
            },
            {
                displayName: '70 -> 100 triệu',
                link: '',
            },
            {
                displayName: 'Trên 100 triệu',
                link: '',
            },
        ]
    },
    {
        filterTitle: 'TÌM THEO KHOẢNG DIỆN TÍCH',
        filterItems: [
            {
                displayName: 'Dưới 30 triệu',
                link: '',
            },
            {
                displayName: '30 -> 50 triệu',
                link: '',
            },
            {
                displayName: '50 -> 80 triệu',
                link: '',
            },
            {
                displayName: '80 -> 100 triệu',
                link: '',
            },
            {
                displayName: '100 -> 150 triệu',
                link: '',
            },
            {
                displayName: '150 -> 300 triệu',
                link: '',
            },
            {
                displayName: '300 -> 500 triệu',
                link: '',
            },
            {
                displayName: 'Trên 500 triệu',
                link: '',
            },
        ]
    }
]
const hotLocationList = [
    {
        title: 'CHO THUÊ CĂN HỘ CHUNG CƯ NỔI BẬT',
        hotLocationItems: [
            {
                displayName: 'Cho thuê căn hộ chung cư Hồ Chí Minh',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Hà Nội',
                num: '173',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Đà Nẵng',
                num: '173',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Khánh Hòa',
                num: '29',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bà Rịa Vũng Tàu',
                num: '27',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bình Dương',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Quảng Ninh',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Hải Phòng',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bắc Giang',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bình Định',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Thừa Thiên Huế',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bình Thuận',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Thanh Hóa',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Kiên Giang',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Đồng Nai',
                num: '4895',
                link: ''
            },
        ]
    }
]
const newProjectList = [
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
]
export default function SearchingList() {
    return (
        <div className="body">
            <SearchBar />
            <div className="search-list-container">
                <div className="main-content">
                    <div className="search-title">
                        <p>Cho thuê căn hộ chung cư | Thuê căn hộ chính chủ | Giá tốt T10/2021</p>
                    </div>
                    <SortedBy />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="search-list-filter-container">
                    {filterList.map((item, index) => {
                        return (
                            <FilterBlock title={item.filterTitle} filterItems={item.filterItems} key={index} />
                        )
                    })}
                    {hotLocationList.map((item, index) => {
                        return (
                            <HotLocation title={item.title} hotLocationItems={item.hotLocationItems} key={index} />
                        )
                    })}
                    <NewProject newProjectItems={newProjectList} />
                </div>
            </div>
        </div>
    )
}

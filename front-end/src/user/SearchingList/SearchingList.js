import React from 'react'
import './SearchingList.css'
import SearchBar from '../../common/SearchBar/SearchBar'
import Card from './Card'
import SortedBy from './SortedBy'
import FilterBlock from './FilterBlock'
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
export default function SearchingList() {
    return (
        <div className="body">
            <SearchBar />
            <div className="search-list-container">
                <div className="main-content">
                    <div className="search-title">
                        <p1>Cho thuê căn hộ chung cư | Thuê căn hộ chính chủ | Giá tốt T10/2021</p1>
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
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="search-list-filter-container">
                    {filterList.map((item) => {
                        return (
                            <FilterBlock title={item.filterTitle} filterList={item.filterItems} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

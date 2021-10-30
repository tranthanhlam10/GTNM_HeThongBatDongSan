import React from 'react'
import './SortedBy.css'
import { Link } from 'react-router-dom'
const sortItems = [
    {
        displayName: 'Mới nhất',
        link: '',
    },
    {
        displayName: 'Giá cao nhất',
        link: '',
    },
    {
        displayName: 'Giá thấp nhất',
        link: '',
    },
]
export default function SortedBy() {
    return (
        <div class="sort-control">
            <div class="filter-header">
                Sắp xếp theo
                <span class="material-icons">
                    expand_more
                </span>
                <ul class="sorted-list">

                    {
                        sortItems.map((item) => {
                            return (
                                <li class="sorted-item">
                                    <Link to={item.link}>{item.displayName}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

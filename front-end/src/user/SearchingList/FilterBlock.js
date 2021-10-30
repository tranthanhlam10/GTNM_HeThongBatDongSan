import React from 'react'
import './FilterBlock.css'
export default function FilterBlock(props) {
    const { filterList, title } = props;
    return (
        <div className="filter-container">
            <div className="filter-title">
                <h1>{title}</h1>
            </div>
            <ul className="filter-list">
                {
                    filterList.map((item) => {
                        return (
                            <li className="filter-item">
                                <a href={item.link}>
                                    {item.displayName}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

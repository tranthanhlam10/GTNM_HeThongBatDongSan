import React from 'react'
import "./SearchInput.css"
export default function SearchInput() {
    return (
        <div className="search-input-container">
            <form action="" className="search-input">
                <span class="material-icons">
                    search
                </span>
                <input placeholder="Nhập địa điểm hoặc dự án..." type="text"></input>
            </form>
        </div>
    )
}

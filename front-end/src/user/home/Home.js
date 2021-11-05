import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="search-banner">
      <div className="search-tab">
        <ul>
          <li className="search-tab-buying">Nhà đất bán</li>
          <li className="search-tab-rent">Nhà đất cho thuê</li>
        </ul>
      </div>
      <div className="search-form">
        <div className="searching-bar">
          <div className="option-box">Loại bất động sản</div>
          <div className="option-label">
            <span className="material-icons">expand_more</span>
          </div>
          <div className="option-icon">
            <Link></Link>
          </div>
          <div className="option-search">
            <Link></Link>
          </div>
          <input
            className="search-input"
            placeholder="Nhập địa điểm hoặc dự án"
          ></input>
          <button className="button-search">
            <span className="material-icons">search</span>
            <i className="icon-search"></i>
            Tìm kiếm
          </button>
        </div>

        <div className="searching-option">
          <div className="option-nationwade">
            Toàn quốc
            <div className="option-label">
              <span className="material-icons">expand_more</span>
            </div>
          </div>
          <div className="option-price">
            Mức giá
            <div className="option-label">
              <span className="material-icons">expand_more</span>
            </div>
          </div>
          <div className="option-area">
            Diện tích
            <div className="option-label">
              <span className="material-icons">expand_more</span>
            </div>
          </div>
          <div className="option-project">
            Dự án
            <div className="option-label">
              <span className="material-icons">expand_more</span>
            </div>
          </div>
          <div className="option-filter">
            Lọc thêm
            <div className="option-label">
              <span className="material-icons">expand_more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

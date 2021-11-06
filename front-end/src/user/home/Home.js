import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="search-banner">
        <div className="search-tab">
          <div className="search-tab-buying">Nhà đất bán</div>
          <div className="search-tab-rent">Nhà đất cho thuê</div>
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
                <span className="material-icons">filter_list</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectTitle-container">
        <div className="title">DỰ ÁN NỔI BẬT</div>
        <p className="description">
          Tổng hợp danh sách các dự án Bất động sản nổi bật mới nhất. Thông tin
          chi tiết về giá bán, vị trí, chính sách ưu đãi sẽ được cập nhật liên
          tục tại BatDongSan.
        </p>
      </div>
    </div>
  );
}

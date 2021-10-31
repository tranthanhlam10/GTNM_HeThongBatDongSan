import React from 'react'
import './Card.css'

export default function Card() {
    return (
        <div className="card-container">
            <div className="img-item">
                <a href="#">
                    <img src="https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg"></img>
                </a>
                <button id="favorite">
                    <div className="favorite-content">
                        <span className="favorite-name">
                            Lưu tin
                        </span>
                        <span className="material-icons fovorite-icon">
                            favorite
                        </span>
                    </div>

                </button>
            </div>
            <div className="content-item">
                {/* //tryền data tên vô đây */}
                <div className="card-title">
                    <a href="#">
                        Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th
                    </a>
                </div>
                <div className="card-time">
                    <span className="material-icons">
                        schedule
                    </span>
                    {/* //tryền data thời gian vô đây */}
                    6 ngày trước
                </div>
                <div className="card-price">
                    <span className="material-icons">
                        attach_money
                    </span>
                    <span>
                        GIÁ:
                    </span>
                    {/* //tryền data giá vô đây */}
                    <span>
                        14 TRIỆU/THÁNG
                    </span>
                </div>
                <div className="card-more-info">
                    <div className="card-area">
                        <span className="material-icons">
                            home_work
                        </span>
                        <span>
                            DIỆN TÍCH:
                        </span>
                        {/* //tryền data diện tích vô đây */}
                        <span>
                            70
                        </span>
                        <span>M2</span>
                    </div>
                    <div className="card-location">
                        <span className="material-icons">
                            location_on
                        </span>
                        <span>
                            QUẬN/HUYỆN:
                        </span>
                        {/* //tryền data location vô đây */}
                        <span>
                            QUẬN NAM TỪ LIÊM, HÀ NỘI
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

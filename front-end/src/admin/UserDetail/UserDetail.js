import React, { useState, useEffect } from "react";
import "./UserDetail.css";
export default function UserDetail() {
  const [user, setUser] = useState("Nguyễn Thành Đạt")
  const [email, setEmail] = useState("ntdat@gmail.com")
  const [address, setAddress] = useState("Bà Rịa Vũng Tàu")
  const [disable, setDisable] = useState(true)
  const [background, setBackground] = useState("rgba(17, 231, 17, .2)")
  const handleChangeUser = (e) => {
    setUser(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangeAddress = (e) => {
    setAddress(e.target.value)
  }


  return (
    <div className="admin-usd-content">
      <h1 className="admin-usd-header">Chi tiết tài khoản</h1>
      <div className="admin-usd-content-detail">
        <div className="admin-usd-detail">
          <div className="admin-usd-information">
            <div className="admin-usd-detail-name">
              <p>Người dùng</p>
              <input
                placeholder="Nhập tên người dùng"
                value={user}
                onChange={(e) => { handleChangeUser(e); setDisable(false); setBackground("rgba(17, 231, 17, 0.685)") }}
              ></input>
            </div>
            <div className="admin-usd-detail-email">
              <p>Email</p>
              <input
                placeholder="Nhập địa chỉ mail"
                value={email}
                onChange={(e) => { handleChangeEmail(e); setDisable(false); setBackground("rgba(17, 231, 17, 0.685)") }}
              ></input>
            </div>
            <div className="admin-usd-detail-address">
              <p>Địa chỉ</p>
              <input placeholder="Nhập địa chỉ" value={address} onChange={(e) => { handleChangeAddress(e); setDisable(false); setBackground("rgba(17, 231, 17, 0.685)") }}></input>
            </div>
          </div>
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg"
            alt=""
            className="imformation__photo"
            height="300px"
            width="300px"
          ></img>
        </div>

        <div className="admin-usd-moreinfo">
          <p className="description">Thông tin mô tả:</p>
          <p>
            Nguyễn Thành Đạt là một doanh nhân và tỷ phú, hiện là Chủ tịch tập
            đoàn Vingroup. Ông được xem là tỷ phú đô la Mỹ đầu tiên trên sàn
            chứng khoán Việt Nam từ ngày 7 tháng 3 năm 2011 với giá trị tài sản
            lên đến khoảng 21.200 tỷ đồng Việt Nam tương đương 1 tỷ đô la Mỹ tại
            thời điểm đó. Phạm Nhật Vượng là người cực kỳ kín tiếng, nhưng vô
            cùng nổi tiếng.
          </p>
          <ul className="re-description">
            {" "}
            Danh sách nhà đất sở hữu:
            <li>Vinhome</li>
            <li>Sala</li>
            <li>Nova</li>
          </ul>
          <div className="action">
            <button className="btn--accept-usd" onClick={SaveNofication} disabled={disable} style={{ "background": background }}>
              <a>
                <span class="material-icons">archive</span>
                <p>Lưu</p>
              </a>
            </button>
            <button className="btn--delete-usd" onClick={DeleteNofication}>
              <a>
                <span class="material-icons">delete</span>
                <p>Xóa</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeleteNofication() {
  alert("Xóa thành công");
}

function SaveNofication() {
  alert("Lưu thành thành công");
}

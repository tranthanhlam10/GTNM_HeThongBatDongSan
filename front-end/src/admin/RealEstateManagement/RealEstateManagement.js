import React from "react";
import "./RealEstateManagement.css";
import { useState } from "react";
import PopUpAdd from "../AddAdminPopUp/PopUpAdd.js";
import AddRealEstateDetail from "../AddAdminPopUp/AddRealEstateDetail";
export default function RealEstateManagement() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="admin-rem-content">
      <h2 className="admin-rem-heading">ADMIN DASHBOARD</h2>
      <div className="admin-rem-table">
        <div className="admin-rem-table-content">
          <div></div>
          <h1 className="rem-table-title">Quản lý nhà đất</h1>
          <button
            className="rem-btn-addre"
            onClick={() => setButtonPopup(true)}
          >
            <a>
              <span class="material-icons">add_circle</span>
              <p>Thêm nhà đất mới</p>
            </a>
          </button>
          <PopUpAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
            {" "}
            <AddRealEstateDetail />
          </PopUpAdd>
        </div>
        <div className="rem-search-bar">
          <input
            type="search"
            placeholder="Tìm nhà đất"
            className="rem-search-input"
          ></input>
          <button className="rem-search-button">
            <span className="material-icons">search</span>
          </button>
        </div>
        <table className="rem-table-re-detail">
          <tr>
            <th>id</th>
            <th>Tên nhà đất</th>
            <th>Giá</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Vinhomes</td>
            <td>15 tỷ</td>
            <td>Sài Gòn</td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a>
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem">
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Salah</td>
            <td>29 Tỷ</td>
            <td>Sài Gòn</td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a>
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem">
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>KTX ĐHQG</td>
            <td>35 Tỷ</td>
            <td>Bình Dương</td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a>
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem">
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Suối Tiên</td>
            <td>20 tỷ</td>
            <td>Đồng Nai</td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a>
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem">
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
                </a>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

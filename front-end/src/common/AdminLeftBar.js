import React from "react";
import "./AdminLeftBar.css";
import { Link } from "react-router-dom";
export default function AdminLeftbar() {
  return (
    <div class="admin-left-bar">
      <div className="lb-header">
        <span class="material-icons">home</span>
        Trang chủ
      </div>
      <div className="lb-realestate">
        <button class="dropdown-btn" onClick={Dropdown}>
          <span class="material-icons">real_estate_agent</span>
          Nhà đất
        </button>
        <div class="dropdown-container">
          <Link className="admin-option" to="/admin/realestatemanagement">
            Quản lí nhà đất
          </Link>
          <Link className="admin-option" to="/admin/realestatedetail">
            Chi tiết nhà đất
          </Link>
        </div>
      </div>
      <div className="lb-project">
        <button class="dropdown-btn" onClick={Dropdown}>
          <span class="material-icons">villa</span>
          Dự án
        </button>
        <div class="dropdown-container">
          <Link className="admin-option" to="/admin">
            Quản lí dự án
          </Link>
          <Link className="admin-option" to="/admin/projectdetail">
            Chi tiết dự án
          </Link>
        </div>
      </div>
      <div className="lb-account">
        <button class="dropdown-btn" onClick={Dropdown}>
          <span class="material-icons">account_circle</span>
          Tài khoản
        </button>
        <div class="dropdown-container">
          <Link className="admin-option" to="/admin/usermanagement">
            Quản lí tài khoản
          </Link>
          <Link className="admin-option" to="/admin/userdetail">
            Chi tiết tài khoản
          </Link>
        </div>
      </div>
      <div className="lb-analytics">
        <button class="dropdown-btn" onClick={Dropdown}>
          <span class="material-icons">analytics</span>
          Thống kê
        </button>
      </div>
    </div>
  );
}

function Dropdown() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

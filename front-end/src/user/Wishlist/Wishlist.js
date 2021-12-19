import React from "react";
import "./Wishlist.css";
import SearchBar from "../../common/SearchBar/SearchBar";
import WishCard from "./WishCard";
import WishSort from "./WishSort";
import { connect } from "react-redux";
const Wishcardlist = [
  {
    img: 'https://lh3.googleusercontent.com/proxy/b8Gzjr2UYpT5n2WOlViSDlobzpR0wrYrSf0JmVFOmSr9DYwR5Ufgm4lcnHWQB3z-CsVD8MoJXt5aNZ4udQm05wpfXNY8Na_F3t8NVprd89XczudmRHT2aO_7Uren_luFHbn4erKeKhEgsOUDJhc0Li6GxIrw0tg',
    name: 'Cho thuê phòng trọ đường Liên Phường, Quận 9',
    time: '20 ngày trước',
    price: '9 TRIỆU/THÁNG',
    area: '50',
    location: 'Quận 9, thành phố Hồ Chí Minh',
    link: '/realestate'
  },
  {
    img: 'https://phongnhatro.com/upload/files/images/2017/02/original/20170219_084324_4ddaff41da0fea15f676f931b76d7df3.jpg',
    name: 'Chính chủ cho thuê phòng trọ quận 9',
    time: '6 ngày trước',
    price: '8.5 TRIỆU/THÁNG',
    area: '30',
    location: 'Quận 9, thành phố Hồ Chí Minh',
    link: '/realestate'
  },
];

function Wishlist(props) {
  return (
    <div className="wish-list-page">
      <SearchBar />
      <div className="wish-list-content">
        <div className="wish-list-container">
          <div className="wish-heading">
            <div className="wish-title">
              <h2>Tin đăng đã lưu</h2>
              <p>Tổng số {props.numberCart} tin đăng</p>
            </div>
            <div className="con-wish-button">
              <WishSort />
            </div>
          </div>
          {props.numberCart ? (
            <div className="wish-card-container">
              {Wishcardlist.map((reCard, index) => {
                return (
                  <div class="wish-item">
                    <WishCard
                      price={reCard.price}
                      name={reCard.name}
                      location={reCard.location}
                      time={reCard.time}
                      area={reCard.area}
                      img={reCard.img}
                      link={reCard.link}
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        {/* <div className="wish-list-ads"></div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Wishlist);

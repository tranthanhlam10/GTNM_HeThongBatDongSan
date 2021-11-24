import React, { useState } from "react";
import "./HomeSearchBar.css";
import { Link, useHistory } from "react-router-dom";
import HomeOption from "./HomeOption";
import loading1 from '../../assets/loading1.gif'
import Loading from '../../common/Loading'

const TypeHomeOption = [
  {
    type: "Hồ Chí Minh",
  },
  {
    type: "Hà Nội",
  },
  {
    type: "Bình Dương",
  },
];

const PriceHomeOption = [
  {
    price: "Dưới 500 triệu",
  },
  {
    price: "1 Tỷ",
  },
  {
    price: "2 Tỷ",
  },
];

const SquareHomeOption = [
  {
    square: "Dưới 30 m2",
  },
  {
    square: " 30 m2",
  },
  {
    square: " 50 m2",
  },
];

const ProjectHomeOption = [
  {
    project: "Vinhome",
  },
];


export default function HomeSearchBar() {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [selectTab, setSelectTab] = useState()

  const [backgroundSell, setBackgroundSell] = useState('rgba(0,0,0,.6)')
  const [backgroundRent, setBackgroundRent] = useState('rgba(255,255,255,.6)')
  const [colorSell, setColorSell] = useState('#fff')
  const [colorRent, setColorRent] = useState('#000')
  const [isSelectSell, setIsSelectSell] = useState(true)
  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      history.push('/searchinglist')
    }, 3000)
  }
  const searchBtn = <button className="button-search" onClick={() => handleLoading()}>
    <span className="material-icons">search</span>
    <i className="icon-search"></i>
    <span>Tìm kiếm</span>
  </button>

  const loading = <button className="button-search">
    {<Loading />}
  </button>

  const sellStyle = {
    background: backgroundSell,
    color: colorSell,
    // backgroundColor: this.state.backgroundColor
  }

  const rentStyle = {
    background: backgroundRent,
    color: colorRent,
  }

  const handleClickSell = () => {
    setBackgroundRent('rgba(255,255,255,.6)')
    setColorRent('#000')
    setBackgroundSell('rgba(0,0,0,.6)')
    setColorSell('#fff')
  }
  const handleClickRent = () => {
    setBackgroundSell('rgba(255,255,255,.6)')
    setColorSell('#000')
    setBackgroundRent('rgba(0,0,0,.6)')
    setColorRent('#fff')
  }



  return (
    <div className="search-banner">
      <iframe
        src="https://cdn.houseviet.vn/banner/HouseViet/index.html?v=1.1.1%22"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div className="search-tab-form">
        <div className="search-tab">
          <div className="search-tab-buying" style={sellStyle} onClick={handleClickSell}>Nhà đất bán</div>
          <div className="search-tab-rent" style={rentStyle} onClick={handleClickRent}>Nhà đất cho thuê</div>
        </div>
        <div className="search-form">
          <div className="searching-bar">
            <div className="realestate-type-btn">
              <div className="option-box">Loại bất động sản</div>
              <div className="option-label">
                <span className="material-icons">expand_more</span>
              </div>
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
            {isLoading ? loading : searchBtn}
          </div>

          <div className="searching-option">
            <div className="home-searchbar-option">
              <span>Toàn quốc</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Mức giá</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Diện tích</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Dự án</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Lọc thêm</span>
              <span className="material-icons">filter_list</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

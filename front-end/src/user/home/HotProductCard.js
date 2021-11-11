import React from "react";
import "./HotProductCard.css";
import heart1 from "../../assets/heart1.png";
import share1 from "../../assets/share1.png";
export default function HotProductCard(props) {
  const { price, name, address, juridical, areainfo, img } = props;
  return (
    <div className="hot-card-info-container">
      <a href="#" className="hot-card-info-link">
        <div className="hot-card-img">
          <img src={img}></img>
        </div>
        <div className="hot-card-info">
          <div className="hot-card-title">
            <p>{name}</p>
            <div className="hot-card-title-icon-container">
              <div className="hot-card-icon-heart">
                <img src={heart1} />
              </div>
              <div className="hot-card-icon-share">
                <img src={share1} />
              </div>
            </div>
          </div>
          <div className="hot-card-detail">
            <div className="con-hot-card-price">
              <span className="material-icons">local_offer</span>
              <p className="hot-card-price">{price}</p>
            </div>
            <div className="con-hot-card-address">
              <span className="material-icons">location_on</span>
              <p className="hot-card-address">{address}</p>
            </div>
            <div className="con-hot-card-juridical">
              <span className="material-icons">gavel</span>
              <p className="hot-card-juridical">{juridical}</p>
            </div>
            <div className="con-hot-card-area">
              <span className="material-icons">layers</span>
              <p className="hot-card-area">{areainfo}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

import { Button, Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import cardImg from "../../assets/card.jpg";
import clockIcon from "../../assets/icons/clock.svg";
import listIcon from "../../assets/icons/list.svg";
import starIcon from "../../assets/icons/star.svg";
import userIcon from "../../assets/icons/user.svg";

const Card = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <>
      <div className="card__item-box">
        <Link to="/course" className="card__item">
          <div className="card__image-box">
            <img src={cardImg} alt="Card" />
          </div>
          <div className="card__desc-box">
            <h3 className="card__title">Ut vitae leo tortor lectus nullam quisque mauris arcu scelerisque.</h3>
            <p className="card__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis ducimus corporis est vel
              eligendi enim nemo totam quae illum repellat, autem beatae? Doloribus dignissimos non expedita a iusto at!
            </p>
          </div>
          <div className="card__info-box">
            <div className="card__time-box">
              <div className="card__time">
                <img src={clockIcon} alt="Clock" />
                <span>00:50:45 Hours</span>
              </div>
              <div className="card__lessons">
                <img src={listIcon} alt="List" />
                <span>15 Lessons</span>
              </div>
            </div>
            <div className="card__price-box">
              <p className="card__price">$30</p>
              <div className="card__rating">
                <img src={starIcon} alt="Rate" />
                <span>1,235</span>
              </div>
              <div className="card__user">
                <img src={userIcon} alt="User" />
                <span>1,235</span>
              </div>
            </div>
          </div>
        </Link>
        {pathname === "admin" && (
          <Space className="card__buttons" style={{ marginTop: "10px" }}>
            <Button danger type="primary" size="small">
              Delete
            </Button>
            <Button type="primary" size="small">
              Edit
            </Button>
            <Button type="primary" size="small">
              Add
            </Button>
          </Space>
        )}
      </div>
    </>
  );
};

export default Card;

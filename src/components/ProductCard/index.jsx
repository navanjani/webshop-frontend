import "./style.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ title, price, rating, description, image, id }) => {
  return (
    <div className="product-card card mb-3 shadow-sm rounded-2 bg-body border border-0">
      <div className="row g-0">
        <div className="col-md-5 product-image-wrapper">
          <NavLink to={`/details/${id}`}>
            <div className="product-image rounded-2 shadow-sm">
              <img src={image} alt={title} />
            </div>
          </NavLink>
        </div>

        <div className="col-md-7">
          <div className="card-body">
            <div className="product-details">
              <h3>{title}</h3>
              <div className="product-price row">
                <div className="col-md-5">${price}</div>
                <div className="product-rating col-md-5">{rating}</div>
              </div>
              <div className="product-description">
                <p>{description}</p>
              </div>
              <div className="product-shop-icons"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };

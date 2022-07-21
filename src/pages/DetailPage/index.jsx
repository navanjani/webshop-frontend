import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import "./style.scss";

const DetailPage = () => {
  const params = useParams();
  const { product_id } = params;
  const [product, setProduct] = useState(null);
  const getProductDetail = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      setProduct(response.data.product);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getProductDetail(product_id);
  }, [product_id]);
  return (
    <div className="container page-container">
      {product ? (
        <div className="row g-0">
          <div className="col-md-5 product-image-wrapper">
            <div className="product-image">
              <img src={product.mainImage} alt={product.title} />
            </div>
          </div>
          <div className="col-md-7">
            <h3>{product.title}</h3>
            <div className="product-price row">
              <div className="col-md-5">
                ${product.price}
                <div className="product-rating ">{product.rating}</div>
              </div>
              <div className="product-review col-md-5">
                <button type="button" className="btn btn-secondary">
                  Add Review
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading Details.."
      )}
    </div>
  );
};
export { DetailPage };

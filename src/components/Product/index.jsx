//------------Basic imports---------------
import React from "react";
import "./Product.scss";

//------------Libraries---------------
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//------------Components---------------
import { Button } from "../index";

//------------ROUTES---------------
import ROUTES from "../../route/routes";

//------------Assets---------------
import ICONS from "../../assets/icons";

//------------Redux---------------
import { deleteProduct as deleteProductAction } from "../../redux/actions/actions";
import { deleteProduct } from "../../APIs/productsAPI";
import { useSelector } from "react-redux";

const Product = ({ data }) => {
  const {
    count = 0,
    id = "",
    imageUrl = "",
    name = "",
    description = "",
  } = data;

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state);

  const deleteBtnHandler = () => {
    const confirmation = window.confirm(
      "Are you surec that you want to delete this product?"
    );
    if (confirmation) {
      dispatch(
        deleteProductAction({
          productToDelete: id,
          success: false,
          loading: true,
        })
      );
      dispatch(deleteProduct());
    }
  };

  //Layout:
  return (
    <div className="product">
      <div className="product__image">
        <img src={imageUrl} alt="logo" />
      </div>

      <div className="product__right">
        <h2 className="product__title">{name}</h2>
        {description && <p className="product__text">{description}</p>}
        <p className="product__count">
          <span>Available items:</span>
          {count}
        </p>
        <div className="product__controls">
          <Button disable={loading}>
            <Link to={`${ROUTES.productDetail}${id}`}>View</Link>
          </Button>
          <button
            disabled={loading}
            onClick={deleteBtnHandler}
            className="product__controls_delete"
          >
            {ICONS.utils.delete}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

//-----------------Basic imports------------------------
import React from "react";
import "./ProductDetails.scss";

//-----------------Components------------------------
import { Button, Loader } from "../../components";

//-----------------Libraries------------------------
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

//-----------------Redux actions------------------------
import {
  getOneProduct as getOneProductAction,
  showProductForm,
} from "../../redux/actions/actions";
import { useSelector } from "react-redux";

//----------------APIs------------------------
import { getOneProduct } from "../../APIs/productsAPI";

const ProductDetails = () => {
  const { pathname } = useLocation();

  const id = pathname.split("/")[pathname.split("/").length - 1];

  const dispatch = useDispatch();
  const { currentProduct, loading } = useSelector((state) => state);

  const editBtnHandler = () =>
    dispatch(
      showProductForm({
        showForm: true,
      })
    );

  React.useEffect(() => {
    dispatch(getOneProductAction({ loading: true, newProduct: id }));
    dispatch(getOneProduct());
    return () => {
      dispatch(getOneProductAction({ currentProduct: null }));
    };
  }, []);
  //Layout:
  return (
    <section className="productDetails">
      {currentProduct && typeof currentProduct === "object" && (
        <div className="container">
          <h1 className="productDetails__name">{currentProduct?.name}</h1>
          <div className="productDetails__image">
            {currentProduct?.imageUrl ? (
              <img
                alt=""
                className="productDetails__image"
                src={currentProduct?.imageUrl}
              />
            ) : (
              <span>Photo not exists</span>
            )}
          </div>

          {currentProduct?.description && (
            <>
              <h2 className="productDetails__title">Description:</h2>
              <div className="productDetails__text">
                {currentProduct?.description}
              </div>
            </>
          )}

          <h2 className="productDetails__title">Properties:</h2>
          <div className="productDetails__text">
            <p>
              <span>Available items:</span>
              {currentProduct?.count}
            </p>
            <p>
              <span>Weight:</span>
              {currentProduct?.weight} grams
            </p>
            <p>
              <span>Width:</span>
              {currentProduct?.width || 0} santimeters
            </p>
            <p>
              <span>Height:</span>
              {currentProduct?.height || 0} santimeters
            </p>
          </div>

          <>
            <h2 className="productDetails__title">Comments:</h2>
            <ul className="productDetails__comments">
              {currentProduct?.comments?.map((item) => (
                <li className="productDetails__comment">
                  <div>{item?.description}</div>
                  <span>{item?.date}</span>
                </li>
              ))}
            </ul>
          </>

          <Button click={editBtnHandler}>Edit</Button>
        </div>
      )}
      {loading && <Loader />}
    </section>
  );
};

export default ProductDetails;

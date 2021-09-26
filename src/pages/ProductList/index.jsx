//-----------------Basic imports------------------------
import React from "react";
import "./ProductList.scss";

//-----------------Components------------------------
import { Button, Product, Loader } from "../../components";

//-----------------Libraries------------------------
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//-----------------Redux actions------------------------
import { showProductForm } from "../../redux/actions/actions";

//-----------------APIs------------------------
import { getProducts } from "../../APIs/productsAPI";

const ProductList = () => {
  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state);

  const addBtnHandler = () => dispatch(showProductForm({ showForm: true }));

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <section className="productList">
      <div className="container">
        <h1 className="productList__title">Products</h1>
        <ul className="productList__list">
          {products && products.length > 0 ? (
            products.map((item, index) => (
              <li key={index} className="productList__item">
                <Product data={item} />
              </li>
            ))
          ) : !loading ? (
            <span className="productList_empty__message">
              No products available
            </span>
          ) : null}
        </ul>
      </div>
      {loading && <Loader />}
      <Button click={addBtnHandler} className="productList__addBtn">
        +
      </Button>
    </section>
  );
};

export default ProductList;

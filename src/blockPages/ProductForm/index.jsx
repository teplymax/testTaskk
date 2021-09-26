//------------Basic imports---------------
import React from "react";
import "./ProductForm.scss";

//------------Components------------------
import { Modal, Button, Input } from "../../components";

//-----------------Libraries------------------------
import { useSelector, useDispatch } from "react-redux";

//-----------------Redux actions------------------------
import {
  addProduct as addProductAction,
  updateProduct as updateProductAction,
  showProductForm,
} from "../../redux/actions/actions";

//-----------------APIs------------------------
import { addProduct, updateProduct } from "../../APIs/productsAPI";

const ProductForm = () => {
  const { showForm, loading, currentProduct, success } = useSelector(
    (state) => state
  );

  const [data, setData] = React.useState();

  const dispatch = useDispatch();

  const cancelHandler = () => {
    document.querySelector("#productForm").reset();
    setData(null);
    dispatch(showProductForm({ showForm: false }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!currentProduct) {
      dispatch(
        addProductAction({ loading: true, success: false, newProduct: data })
      );
      dispatch(addProduct());
    } else {
      dispatch(
        updateProductAction({ loading: true, success: false, newProduct: data })
      );
      dispatch(updateProduct());
    }
  };

  const changeFormHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  React.useEffect(() => {
    success && cancelHandler();
  }, [success]);

  React.useEffect(() => {
    if (currentProduct) setData(currentProduct);
    else setData("");
  }, [currentProduct]);
  //Layout:
  return (
    <Modal visible={showForm} onClosePopup={cancelHandler}>
      <form
        id="productForm"
        onChange={changeFormHandler}
        onSubmit={submitHandler}
        className="productForm"
      >
        <div className="productForm__inputs">
          <Input
            label="Product name"
            placeholder="Enter name..."
            value={data?.name || ""}
            type="text"
            name="name"
          />
          <Input
            label="Available items"
            placeholder="Enter number..."
            value={data?.count || ""}
            type="number"
            name="count"
            minValue={0}
          />
          <Input
            label="Description"
            placeholder="Enter description..."
            value={data?.description || ""}
            type="text"
            name="description"
          />
          <Input
            label="Product weight"
            placeholder="Enter weight in grams..."
            value={data?.weight || ""}
            type="number"
            name="weight"
            minValue={0}
          />
          <Input
            label="Product width"
            placeholder="Enter width in santimeters..."
            type="number"
            name="width"
            value={data?.width || ""}
            minValue={0}
          />
          <Input
            label="Product height"
            placeholder="Enter height in santimeters..."
            type="number"
            name="height"
            value={data?.height || ""}
            minValue={0}
          />
          <Input
            label="Product photo"
            type="text"
            name="imageUrl"
            value={data?.imageUrl || ""}
          />
        </div>

        <div className="productForm__controls">
          <Button type="submit" disable={(data && !data.name) || loading}>
            {currentProduct ? "Save" : "Add"}
          </Button>
          <Button type="reset" click={cancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProductForm;

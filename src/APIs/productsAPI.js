//--------------Firebase----------------------------------
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import db from "./firebase/firebaseConfig";

//--------------Redux---------------------------------
import {
  getProducts as getProductsAction,
  getOneProduct as getOneProductAction,
  addProduct as addProductAction,
  deleteProduct as deleteProductAction,
  updateProduct as updateProductAction,
} from "../redux/actions/actions";

export const getProducts = () => async (dispatch) => {
  dispatch(getProductsAction({ loading: true }));
  const data = await getDocs(collection(db, "products"));
  const products = data.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
  dispatch(getProductsAction({ loading: false, products }));
};

export const getOneProduct = () => async (dispatch, getState) => {
  const { newProduct } = getState();
  dispatch(getOneProductAction({ loading: true }));
  const data = await getDoc(doc(db, "products", newProduct));
  let product = { ...data.data(), id: data.id };
  dispatch(getOneProductAction({ loading: false, currentProduct: product }));
};

export const updateProduct = () => async (dispatch, getState) => {
  const { newProduct } = getState();
  dispatch(updateProductAction({ loading: true }));
  try {
    await updateDoc(doc(db, "products", newProduct.id), newProduct);

    dispatch(
      updateProductAction({
        loading: false,
        success: true,
        currentProduct: newProduct,
      })
    );
  } catch (e) {
    console.error("Error updating product: ", e);
    dispatch(updateProductAction({ loading: false, success: false }));
  }
};

export const addProduct = () => async (dispatch, getState) => {
  const { newProduct } = getState();
  let id;
  try {
    const docRef = await addDoc(collection(db, "products"), newProduct);
    id = docRef.id;
  } catch (e) {
    dispatch(
      addProductAction({
        loading: false,
        success: false,
      })
    );
    console.error("Error adding product: ", e);
  }
  dispatch(
    addProductAction({
      loading: false,
      success: true,
      newProduct: { ...newProduct, id: id },
    })
  );
};

export const deleteProduct = () => async (dispatch, getState) => {
  const state = getState();
  try {
    await await deleteDoc(doc(db, "products", state.productToDelete));
  } catch (e) {
    dispatch(
      deleteProductAction({
        loading: false,
        success: false,
      })
    );
    console.error("Error deleting product: ", e);
  }
  dispatch(
    deleteProductAction({
      loading: false,
      success: true,
    })
  );
};

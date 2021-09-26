//-----------------Basic imports------------------------
import React from "react";
import "./App.scss";

//-----------------Routes------------------------
import MainRoutes from "./route";

//-----------------Block pages------------------------
import ProductForm from "./blockPages/ProductForm";

//-----------------Libraries------------------------
import { Provider } from "react-redux";

//-----------------Redux------------------------
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
      <ProductForm />
    </Provider>
  );
}

export default App;

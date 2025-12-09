import { createContext, useContext, useReducer } from "react";
import FragranceReducer, { initialState } from "./ShopReducer";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FragranceReducer, initialState);

  const addToProduct = (product) => {
    const newProduct = state.Products.concat(product);
    calCulateProduct(newProduct);
    dispatch({
      type: "ADD_TO_PRODUCT",
      payload: {
        Products: newProduct,
      },
    });
  };

  const RemoveProduct = (product) => {
    const updateProduct = state.Products.filter((pro) => pro.id !== product.id);
    calCulateProduct(updateProduct);
    dispatch({
      type: "REMOVE_TO_PRODUCT",
      payload: {
        Products: updateProduct,
      },
    });
  };

  const calCulateProduct = (Products) => {
    if (!Array.isArray(Products)) {
      console.log("not product");
      return;
    }
    let total = 0;
    Products.forEach((pro) => {
      total += pro.price;
    });
    dispatch({
      type: "CALCULATE_TO_PRODUCT",
      payload: total,
    });
  };
  const values = {
    Products: state.Products,
    total: state.total,
    addToProduct,
    RemoveProduct,
    calCulateProduct,
  };
  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("use outside of context");
  }
  return context;
};

export default useShop;

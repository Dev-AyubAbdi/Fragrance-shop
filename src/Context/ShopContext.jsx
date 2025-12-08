import { createContext, useContext, useReducer } from "react";
import FragranceReducer, { initialState } from "./ShopReducer";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FragranceReducer, initialState);

  const addToProduct = (product) => {
    const newProduct = state.Products.concat(product);

    dispatch({
      type: "ADD_TO_PRODUCT",
      payload: {
        Products: newProduct,
      },
    });
  };

  const RemoveProduct = (product) => {
    const updateProduct = state.Products.filter((pro) => pro.id !== product);

    dispatch({
      type: "ROMOVE_TO_PRODUCT",
      payload: {
        Products: updateProduct,
      },
    });
  };

  const values = {
    Products: state.Products,
    total: state.total,
    addToProduct,
    RemoveProduct,
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

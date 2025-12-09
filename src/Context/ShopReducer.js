export const initialState = {
  Products: [],
  total: 0,
};

const FragranceReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_PRODUCT":
      return {
        ...state,
        Products: payload.Products
      };
      case "REMOVE_TO_PRODUCT" :
      return {
            ...state,
            Products: payload.Products
      }
    default:
      throw new Error("unknow Reducer");
  }
};

export default FragranceReducer;

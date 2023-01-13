const ProductReducer = (state, action) => {
   switch (action.type) {
      // all products cases
      case "SET_PRODUCTS_LOADING":
         return {
            ...state,
            isLoading: true,
         };
      case "SET_PRODUCT":
         return {
            ...state,
            isLoading: false,
            products: action.payload,
         };
      case "SET_PRODUCTS_ERROR":
         return {
            ...state,
            isLoading: false,
            isError: true,
         };

      // single product cases
      case "SET_SINGLE_LOADING":
         return {
            ...state,
            isSingleLoading: true,
         };
      case "SET_SINGLE_PRODUCT":
         return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload,
         };
      case "SET_SINGLE_ERROR":
         return {
            ...state,
            isSingleLoading: false,
            isError: true,
         };

      default:
         return {
            state
         };
   }
}

export default ProductReducer;
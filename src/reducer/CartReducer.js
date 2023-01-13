const CartReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TO_CART':
         let { id, color, quantity, product } = action.payload;

         // checking any existing product availability 
         let existingProduct = state.cart.find((curElem) => curElem.id === id + color)

         // if exist increase only quantity
         if (existingProduct) {
            let updatedCart = state.cart.map((curElem, i) => {

               if (curElem.id === id + color) {
                  let newQuantity = curElem.quantity + quantity;

                  if (newQuantity >= curElem.max) {
                     newQuantity = curElem.max
                  }

                  return {
                     ...curElem,
                     quantity: newQuantity
                  }
               } else {
                  return curElem;
               }
            });
            return {
               ...state,
               cart: updatedCart
            }

         } else {
            let cartProduct;
            cartProduct = {
               id: id + color,
               name: product.title,
               color,
               quantity,
               image: product.thumbnail,
               price: product.price,
               max: product.stock
            }
            return {
               ...state,
               cart: [...state.cart, cartProduct]
            }
         }


      case 'REMOVE_ITEM':
         let updatedCart = state.cart.filter((curElem) => curElem.id !== action.payload)
         console.log("CartReducer.js, 21, updatedCart =", updatedCart);
         return {
            ...state,
            cart: updatedCart
         }

      case 'CLEAR_CART':
         return {
            ...state,
            cart: []
         }

      case 'SET_DECREMENT':
         let updatedCartDec = state.cart.map((curItem) => {
            if (curItem.id === action.payload) {
               let newQty = curItem.quantity - 1

               if (newQty <= 0) {
                  newQty = 1
               }

               return {
                  ...curItem,
                  quantity: newQty
               }

            } else {
               return curItem;
            }
         });

         return {
            ...state,
            cart: updatedCartDec
         }
      case 'SET_INCREMENT':
         let updatedCartInc = state.cart.map((curItem) => {
            if (curItem.id === action.payload) {
               let newQty = curItem.quantity + 1;
               if (newQty >= curItem.max) {
                  newQty = curItem.max;
               }

               return {
                  ...curItem,
                  quantity: newQty
               }
            } else {
               return curItem;
            }
         });
         return {
            ...state,
            cart: updatedCartInc
         }

      case 'CART_TOTAL_ITEMS':
         let updatedCartTotalItems = state.cart.reduce((initialValue, curNum) => {
            initialValue = initialValue + curNum.quantity;
            return initialValue;
         }, 0); 
         return {
            ...state,
            total_item: updatedCartTotalItems
         }
      case 'CART_ORDER_TOTAL':
         let total_price = state.cart.reduce((initialVal, curElem) => {
            initialVal = initialVal + (curElem.quantity * curElem.price);
             console.log("CartReducer.js, 123, initialVal =", initialVal);
            return initialVal;
           
         }, 0);
         return {
            ...state,
            total_price
         }
      default:
         return state
   }
}

export default CartReducer
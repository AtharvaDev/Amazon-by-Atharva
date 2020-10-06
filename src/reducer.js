export const initialState = {
  basket: [],
  user: null,
};

// selector
export const getCartTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        // this basically chopped the index by 1
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

// reducer is about how we are able to dispatch the action in data layer and pulling out the data
// basically it handles pushing and popping data

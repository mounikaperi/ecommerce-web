const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require("../constants/wishlistConstants");

const wishlistReducer = ({type, payload}, state={wishlistItems:[]}) => {
  switch (type) {
    case ADD_TO_WISHLIST: {
      const item = payload;
      const itemExist = state.wishlistItems.find((currentItem) => currentItem.product === item.product);
      if (itemExist) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.map((currentItem) => currentItem.product === itemExist.product ? item: currentItem)
        };
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, item]
      };
    }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((currentItem) => currentItem.product !== payload)
      };
    default:
      return state;
  }
};

module.exports = {
  wishlistReducer
};

const { SAVE_FOR_LATER, REMOVE_FROM_SAVE_FOR_LATER } = require("../constants/saveForLaterConstants");

const saveForLaterReducer = ({ type, payload}, state = {saveForLaterItems: []}) => {
  switch (type) {
    case SAVE_FOR_LATER: {
      const item = payload;
      const isItemExist = state.saveForLaterItems.find((currentItem) => currentItem.product === item.product);
      if (isItemExist) {
        return {
          ...state,
          saveForLaterItems: state.saveForLaterItems.map((currentItem) => currentItem.product === isItemExist.product ? item: currentItem)
        };
      }
      return {
        ...state,
        saveForLaterItems: [...state.saveForLaterItems, item]
      };
    }
    case REMOVE_FROM_SAVE_FOR_LATER:
      return {
        ...state,
        saveForLaterItems: state.saveForLaterItems.filter((currentItem) => currentItem.product !== payload)
      };
    default:
      return state;
  }
};

module.exports = {
  saveForLaterReducer
};

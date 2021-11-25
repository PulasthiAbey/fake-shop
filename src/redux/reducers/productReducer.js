import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  product: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};

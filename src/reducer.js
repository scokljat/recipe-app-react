import { ActionType } from "./ActionType";
const initialState = {
  meal: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_MEAL:
      return { ...state, cat: payload };
    default:
      return state;
  }
};

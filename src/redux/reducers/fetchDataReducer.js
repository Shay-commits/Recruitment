import { FETCH_DATA } from "../types";

const initialState = { data: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, data: action.data }
    default:
      return state;
  }
}

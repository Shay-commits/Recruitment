import { SIGN_UP } from "../types";

const initialState = { signUpAttempted: "False", signUpEmail: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      // Do something here
      console.log(action.payload.email + " has signed up!");
      return {
        signUpAttempted: "True",
        signUpEmail: action.payload.email,
        ...state,
      };
    default:
      return state;
  }
}

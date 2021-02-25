import { SIGN_UP, FETCH_DATA } from "./types";

export const signUp = (email) => ({
  type: SIGN_UP,
  payload: {
    email: email,
  },
});

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data: data
  }
};

export const fetchAPIData = () => {
  // Fetching data from online api and limiting to first 5 results
  return (dispatch) => {
      return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()})
      .then((json) => {
        return dispatch(fetchData(json.slice(0,5)));
      } )
      .catch((error) => console.log(error))
}
}




const contentDetailReducer = (state= "0", action) => {
  switch (action.type) {
  case 'SET_DETAIL':
    return action.data
  default:
    return state
  }


}

export const contentDetailChanger = (data) => {
  return {
    type : 'SET_DETAIL',
    data
  }
}



export default contentDetailReducer
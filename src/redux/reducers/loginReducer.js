const loginReducer = (state= false, action) => {

    switch(action.type) {
        case 'SET_USER':
            return action.data
        default:
            return state    
    }
}


export const setUser = (credentials) => {
    
    console.log(`We're in the reducer ${credentials.email}`)
    console.log(`We're in the reducer2 ${credentials.password}`)
    
    if (credentials.password == "root") {
        console.log('we got here')
    

      return {
          type: 'SET_USER',
          data: true
      }
    }
    
    console.log('ended up here instead')
    
    return {
        data: false
    }


} 

export default loginReducer
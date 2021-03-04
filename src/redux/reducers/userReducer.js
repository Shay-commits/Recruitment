const userReducer = (state= [...userDatabase], action) => {

    switch(action.type) {
        case 'NEW_USER':
          return state.concat(action.data)
    
        default:
            return state    
    }
}



export const createUser = (data) => {
  return {
    type: 'NEW_USER',
    data
  }
}


export default userReducer





let userDatabase = [
    
    
    {
        id: "0",
        username: "root",
        password: "root",
        email: "root@accenture.co.uk",
        applications: [ {
            id: "0",
            title: "Software Engineer- Java",
            status: "Recieved",
            feedback: "-",
            },
            {
            id: "3",
            title: "Software Engineer- Java",
            status: "Rejected",
            feedback: "20",
            }
       ],
       bookmarks: [
           {
            id: "2",
            title: "Scrum Master",
            salary: "£36,000 - £50,000",
  careerLevel: " (Accenture will be recruiting at Consultant & Associate Manager levels)",
        
        },
           ]
            
        
    },]
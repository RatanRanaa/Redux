const initState = {
    users: [
        {
            id: 1,
            name: "shakil",
            address: "Batkhela"
        }
    ]
}

const UsersReducers = (state = initState, action) => {
    switch (action.type) {
        case "ADD_USER":
                return {users: [action.payload, ...state.users]}
            // break;

        case "DELETE_USER":
            const newUsers = state.users.filter(user => user.id !== action.id)
            return {users: newUsers}
    
        default:
            return state;
    }
}

export default UsersReducers